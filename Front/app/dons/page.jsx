'use client';

import React, { useState } from 'react';
import Footer from '../ui/footer/Footer';
import Header from '../ui/header/Header';
import Modal from '../ui/location/Modal';
import { AnimalProvider } from '../context/animalContext';

export default function DonsPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <>
      <AnimalProvider>
        <Header />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} isUnderConstruction={true} />
        <div className="h-screen text-center m-10">En construction</div>
        <Footer />
      </AnimalProvider>
    </>
  );
}
