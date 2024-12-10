'use client';

import React from 'react';

const Modal = ({ isOpen, onClose, children, isUnderConstruction = false }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-xl">
          &times;
        </button>
        {isUnderConstruction ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">En Construction</h2>
            <p className="mb-4">Cette fonctionnalité est actuellement en cours de développement.</p>
            <button
              onClick={onClose}
              className=" bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded "
            >
              Fermer
            </button>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Modal;
