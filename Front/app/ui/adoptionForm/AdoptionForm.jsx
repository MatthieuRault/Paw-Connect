'use client';

import { useEffect, useState } from 'react';
import Modal from '../location/Modal';

export default function AdoptionForm() {
  const [userId, setUserId] = useState(null);
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
    window.location.href = '/'; // Redirection to homePage
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    // console.log('token récupéré:', token);
    if (token) {
      const [header, payload, signature] = token.split('.');
      // console.log('Parties du token:', { header, payload, signature });
      const decodedPayload = JSON.parse(atob(payload));
      setUserId(decodedPayload.id);
      // console.log(userId);
    }
  }, []);

  return (
    <>
      <h2 className="text-center text-2xl p-2 font-bold">Formulaire d'adoption</h2>
      <form className="m-2 flex flex-col gap-px items-center">
        <div className=" text-xl">
          <h3 className="p-2">Nom :</h3>
          <input type="text" placeholder="Nom" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="text-xl">
          <h3 className="p-2">Prénom :</h3>
          <input
            type="text"
            placeholder="Prénom"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="text-xl">
          <h3 className="p-2">Email :</h3>
          <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
        </div>

        <label className="form-control">
          <div className="label">
            <span className="label-text text-xl p-2">
              Indiquez vos expériences avec des animaux :
            </span>
          </div>
          <textarea
            placeholder="Entrez votre texte..."
            className="textarea textarea-bordered textarea-lg w-full max-w"
          ></textarea>
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text text-xl p-2">
              Pouvez vous détailler l'environnement pour l'animal :
            </span>
          </div>
          <textarea
            placeholder="Entrez votre texte..."
            className="textarea textarea-bordered textarea-lg w-full max-w"
          ></textarea>
        </label>

        <button
          type="submit"
          className="text-xl btn bg-primary-color hover:bg-secondary-color w-xl m-4"
        >
          Envoyer la demande
        </button>
      </form>

      <Modal isOpen={modalOpen} onClose={closeModal} isUnderConstruction={true} />
    </>
  );
}
