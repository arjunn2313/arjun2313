// Modal.js
import React from 'react';
import './modal.scss'; // Create a corresponding SCSS file for styling

const Modal = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>X</button>
        <div className="viewerContainer">
          {/* Replace with your 360-degree viewer component */}
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Demo Image ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;

