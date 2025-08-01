import React from 'react';

const FullPageModal = ({ show, onClose, title, children, moduleType }) => {
    if (!show) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fullpage-modal-overlay" onClick={handleOverlayClick}>
            <div className="fullpage-modal-container">
                <div className="fullpage-modal-header">
                    <div className="header-content">
                        <span className="module-type">{moduleType}</span>
                        <h1>{title}</h1>
                    </div>
                    <button onClick={onClose} className="close-button">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="fullpage-modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FullPageModal;