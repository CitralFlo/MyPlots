import ReactDom from 'react-dom';
import React from 'react';

export default function PopupPicture({ open, children, onClose }) {
    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div style={overlay} onClick={onClose}/>
            <div style={popup}>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    );
}

const overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000,
}

const popup = {
    position: 'fixed',
    width: '80%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    zIndex: 1000,
    background: 'rgba(56,56,56,0.68)',
    borderRadius: '10px',
}