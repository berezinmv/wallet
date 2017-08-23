import React from "react";
import ReactModal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const Modal = ({isOpen, contentLabel, onRequestClose, children}) => (
    <ReactModal isOpen={isOpen} contentLabel={contentLabel} onRequestClose={onRequestClose} style={customStyles}>
        {children}
    </ReactModal>
);

export default Modal;