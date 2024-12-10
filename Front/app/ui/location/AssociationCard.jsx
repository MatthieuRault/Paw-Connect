'use client';

import { useState, useEffect } from 'react';
import CardImage from './CardImage';
import MailtoButton from './MailtoButton';
import TitleAssociation from './TitleAssociation';
import Modal from './Modal';
import { getAllAssociations, getOneAssociation } from '../../services/Associations';
import Loader from '../loader';

export default function AssociationCard() {
  const [associations, setAssociations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAssociation, setSelectedAssociation] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function fetchAssociations() {
      try {
        const data = await getAllAssociations();
        setAssociations(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des associations:', error);
        setLoading(false);
      }
    }

    fetchAssociations();
  }, []);

  const handleAssociationClick = async (id) => {
    try {
      const data = await getOneAssociation(id);
      setSelectedAssociation(data);
      setModalOpen(true);
    } catch (error) {
      console.error("Erreur lors du chargement des détails de l'association:", error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAssociation(null);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-wrap justify-center gap-10 m-8">
      {associations.map((association) => (
        <div
          key={association.id}
          className="w-auto sm:w-auto md:w-auto lg:w-auto bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg"
        >
          <CardImage />

          <div className="p-4 text-center">
            <TitleAssociation
              title={association.name}
              onClick={() => handleAssociationClick(association.id)}
            />
            <MailtoButton email={association.email} />
          </div>
        </div>
      ))}

      <Modal isOpen={modalOpen} onClose={closeModal} isUnderConstruction={true} />
    </div>
  );
}
