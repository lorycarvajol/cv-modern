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

    const simulateBotResponse = (userMessage) => {
        setIsTyping(true);
        
        setTimeout(() => {
            let botResponse = "Merci pour votre message ! ";
            
            const lowerMessage = userMessage.toLowerCase();
            
            if (lowerMessage.includes('expérience') || lowerMessage.includes('parcours')) {
                botResponse = "J'ai une expérience variée : Data-Analyste chez Airbus (2022-2024), Formateur en développement web (2020-2022), et Monteur-Câbleur chez Alstom (2001-2009). Chaque expérience m'a apporté des compétences complémentaires !";
            } else if (lowerMessage.includes('compétence') || lowerMessage.includes('technique')) {
                botResponse = "Mes compétences principales : Python, SQL, JavaScript, PHP. Frameworks : Django, React, Bootstrap, Symfony. Je maîtrise aussi Docker, Git, et les méthodologies Agile. Consultez la section 'Connaissances' pour plus de détails !";
            } else if (lowerMessage.includes('projet') || lowerMessage.includes('réalisation')) {
                botResponse = "Mon projet phare est PiltoME chez Airbus : une plateforme de pilotage Manufacturing Engineering avec tableaux de bord temps réel, intégration multi-sources et automatisation des processus !";
            } else if (lowerMessage.includes('formation') || lowerMessage.includes('étude')) {
                botResponse = "J'ai suivi une formation intensive en Développement Web et Web Mobile, puis j'ai évolué vers le rôle de formateur. Une reconversion réussie du secteur industriel vers le tech !";
            } else if (lowerMessage.includes('contact') || lowerMessage.includes('joindre')) {
                botResponse = "Vous pouvez me joindre par email : lorycarvajolwebdev@gmail.com ou par téléphone : 06-77-16-55-26. N'hésitez pas à consulter mes profils LinkedIn et GitHub !";
            } else if (lowerMessage.includes('salut') || lowerMessage.includes('bonjour') || lowerMessage.includes('hello')) {
                botResponse = "Bonjour ! Ravi de vous rencontrer ! 👋 Je suis développeur passionné par les technologies web et l'analyse de données. Que souhaitez-vous savoir sur mon profil ?";
            } else if (lowerMessage.includes('merci')) {
                botResponse = "De rien ! C'est un plaisir de vous renseigner. N'hésitez pas si vous avez d'autres questions sur mon parcours ou mes compétences ! 😊";
            } else {
                botResponse += "Je peux vous parler de mon expérience, mes compétences techniques, mes projets, ou vous donner mes coordonnées. Que souhaitez-vous savoir ?";
            }

            setMessages(prev => [...prev, {
                id: Date.now(),
                text: botResponse,
                sender: 'bot',
                timestamp: new Date()
            }]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000); // Délai réaliste
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim() === '') return;

        // Ajouter le message utilisateur
        const userMessage = {
            id: Date.now(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        
        // Simuler une réponse du bot
        simulateBotResponse(inputMessage);
        
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