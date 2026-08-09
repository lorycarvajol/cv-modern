import React, { useState, useRef, useEffect } from 'react';

const ChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Bonjour ! Je suis là pour répondre à vos questions sur mon profil et mes compétences. Comment puis-je vous aider ?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);


    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    // Interroge /api/chat et affiche la reponse au fil de l'eau.
    //
    // `fetch` plutot que `EventSource` : ce dernier ne sait faire que du GET, et
    // l'historique de conversation doit partir dans le corps de la requete.
    const demanderReponse = async (historique) => {
        setIsTyping(true);
        const idReponse = Date.now() + 1;
        let premierFragment = true;

        try {
            const reponse = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    // Le message d'accueil est ecrit en dur cote client : le
                    // modele ne l'a jamais produit, et l'API refuse un historique
                    // qui ne commence pas par le visiteur. On coupe donc tout ce
                    // qui precede le premier message utilisateur.
                    messages: historique
                        .slice(historique.findIndex((m) => m.sender === 'user'))
                        .map((m) => ({
                            role: m.sender === 'user' ? 'user' : 'assistant',
                            content: m.text,
                        })),
                }),
            });

            // Une reponse HTML en 200 signifie qu'on a atterri sur le site au
            // lieu de l'API. Meme controle que le formulaire de contact : sans
            // lui, on afficherait du HTML dans la bulle.
            const typeContenu = reponse.headers.get('content-type') || '';
            if (!reponse.ok || !typeContenu.includes('text/event-stream')) {
                const data = await reponse.json().catch(() => ({}));
                throw new Error(
                    typeof data.detail === 'string'
                        ? data.detail
                        : "Le chat est indisponible. Écrivez-moi par e-mail."
                );
            }

            const lecteur = reponse.body.getReader();
            const decodeur = new TextDecoder();
            let tampon = '';

            // Une lecture peut couper un evenement en deux : on accumule et on
            // ne traite que les evenements termines par une ligne vide.
            while (true) {
                const { done, value } = await lecteur.read();
                if (done) break;

                tampon += decodeur.decode(value, { stream: true });
                const evenements = tampon.split('\n\n');
                tampon = evenements.pop();

                for (const evenement of evenements) {
                    if (!evenement.startsWith('data: ')) continue;
                    const charge = evenement.slice(6);
                    if (charge === '[DONE]') continue;

                    const { texte, erreur } = JSON.parse(charge);
                    if (erreur) throw new Error(erreur);
                    if (!texte) continue;

                    if (premierFragment) {
                        premierFragment = false;
                        setIsTyping(false);
                        setMessages((prev) => [
                            ...prev,
                            { id: idReponse, text: texte, sender: 'bot', timestamp: new Date() },
                        ]);
                    } else {
                        setMessages((prev) =>
                            prev.map((m) =>
                                m.id === idReponse ? { ...m, text: m.text + texte } : m
                            )
                        );
                    }
                }
            }
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 2,
                    text:
                        err.message === 'Failed to fetch'
                            ? "Le chat est injoignable. Écrivez-moi par e-mail."
                            : err.message,
                    sender: 'bot',
                    timestamp: new Date(),
                },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim() === '' || isTyping) return;

        const userMessage = {
            id: Date.now(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        // L'historique envoye au serveur inclut ce message : `messages` n'est
        // pas encore a jour a cet instant, setState n'est pas synchrone.
        const historique = [...messages, userMessage];
        setMessages(historique);
        demanderReponse(historique);

        setInputMessage('');
    };

    const formatTime = (timestamp) => {
        return timestamp.toLocaleTimeString('fr-FR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };

    
    return (
        <div className="chatbox-container">
            {/* Bouton flottant */}
            <div 
                className={`chat-toggle ${isOpen ? 'open' : ''}`}
                onClick={toggleChat}
            >
                {isOpen ? (
                    <i className="fas fa-times"></i>
                ) : (
                    <i className="fas fa-comments"></i>
                )}
            </div>

            {/* Fenêtre de chat */}
            {isOpen && (
                <div 
                    style={{
                        position: 'fixed',
                        bottom: '100px',
                        right: '30px',
                        width: '350px',
                        height: '500px',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                        backdropFilter: 'blur(25px) saturate(180%) brightness(1.1)',
                        WebkitBackdropFilter: 'blur(25px) saturate(180%) brightness(1.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '20px',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 175, 239, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        padding: '20px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                        borderRadius: '20px 20px 0 0'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'linear-gradient(135deg, rgba(10, 255, 239, 0.8), rgba(10, 255, 239, 0.6))',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '12px',
                            boxShadow: '0 4px 12px rgba(10, 255, 239, 0.3)'
                        }}>
                            <i className="fas fa-user-tie" style={{color: '#fff', fontSize: '1.2rem'}}></i>
                        </div>
                        <div style={{flex: 1}}>
                            <h4 style={{color: '#fff', fontSize: '1rem', margin: '0 0 4px 0', fontWeight: 600}}>Lory Carvajol</h4>
                            <span style={{color: 'rgba(10, 255, 239, 0.8)', fontSize: '0.8rem'}}>En ligne</span>
                        </div>
                        <button onClick={toggleChat} style={{
                            background: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'rgba(255, 255, 255, 0.7)'
                        }}>
                            <i className="fas fa-minus"></i>
                        </button>
                    </div>

                    <div style={{
                        flex: 1,
                        padding: '20px',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        {messages.map((message) => (
                            <div key={message.id} style={{
                                display: 'flex',
                                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                                marginBottom: '8px'
                            }}>
                                <div style={{
                                    maxWidth: message.sender === 'user' ? '80%' : '85%',
                                    padding: '12px 16px',
                                    borderRadius: message.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                                    background: message.sender === 'user' 
                                        ? 'linear-gradient(135deg, rgba(10, 255, 239, 0.8), rgba(10, 255, 239, 0.6))'
                                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
                                    color: message.sender === 'user' ? '#fff' : 'rgba(255, 255, 255, 0.9)',
                                    border: message.sender === 'bot' ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                                }}>
                                    <p style={{margin: 0, fontSize: '0.9rem', lineHeight: 1.4}}>{message.text}</p>
                                    <span style={{fontSize: '0.7rem', opacity: 0.7, display: 'block', textAlign: 'right', marginTop: '6px'}}>
                                        {formatTime(message.timestamp)}
                                    </span>
                                </div>
                            </div>
                        ))}
                        
                        {isTyping && (
                            <div style={{display: 'flex', justifyContent: 'flex-start', marginBottom: '8px'}}>
                                <div style={{
                                    padding: '16px',
                                    borderRadius: '18px 18px 18px 4px',
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)'
                                }}>
                                    <div style={{display: 'flex', gap: '4px', alignItems: 'center'}}>
                                        <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(10, 255, 239, 0.8)', animation: 'typing 1.4s infinite ease-in-out'}}></span>
                                        <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(10, 255, 239, 0.8)', animation: 'typing 1.4s infinite ease-in-out', animationDelay: '0.2s'}}></span>
                                        <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(10, 255, 239, 0.8)', animation: 'typing 1.4s infinite ease-in-out', animationDelay: '0.4s'}}></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSendMessage} style={{
                        padding: '20px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)'
                    }}>
                        <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Tapez votre message..."
                                style={{
                                    flex: 1,
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '25px',
                                    padding: '12px 16px',
                                    color: '#fff',
                                    fontSize: '0.9rem',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    outline: 'none'
                                }}
                            />
                            <button type="submit" style={{
                                width: '45px',
                                height: '45px',
                                background: 'linear-gradient(135deg, rgba(10, 255, 239, 0.8), rgba(10, 255, 239, 0.6))',
                                border: '1px solid rgba(10, 255, 239, 0.4)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)'
                            }}>
                                <i className="fas fa-paper-plane" style={{color: '#fff', fontSize: '1rem'}}></i>
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatBox;