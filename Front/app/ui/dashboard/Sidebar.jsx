'use client';

import Link from 'next/link';
import Profil from './Profil';
import { useState } from 'react';
import { Add } from '../animals/Add';
import { EditAnimal } from '../animals/Edit';
import Admin from './Admin';
import { useAuth } from '../../context/authContext';
import Accomodations from './Accomodations';
import Modal from '../location/Modal';

export default function Sidebar() {
  const [activeComponent, setActiveComponent] = useState('profil');
  const { userConnected } = useAuth();

  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-background-color ">
          {activeComponent === 'profil' && <Profil />}

          {activeComponent === 'edit' && <EditAnimal />}

          {activeComponent === 'add' && <Add />}

          {activeComponent === 'adoption' && (
            <Modal isOpen={modalOpen} onClose={closeModal} isUnderConstruction={true} />
          )}

          {activeComponent === 'messages' && (
            <Modal isOpen={modalOpen} onClose={closeModal} isUnderConstruction={true} />
          )}

          {activeComponent === 'admin' && userConnected.role_id === 1 && <Admin />}

          {activeComponent === 'accomodations' && <Accomodations />}

          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-2xl text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li onClick={() => setActiveComponent('profil')}>
              <Link href="">Mon profil</Link>
            </li>
            <li className="dropdown dropdown-bottom">
              <Link href="#" tabIndex={0} role="button">
                Gestion des animaux
              </Link>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li className="text-lg" onClick={() => setActiveComponent('edit')}>
                  <Link href="">Vos animaux</Link>
                </li>

                {(userConnected.role_id === 1 || userConnected.role_id === 3) && (
                  <li className="text-lg" onClick={() => setActiveComponent('add')}>
                    <Link href="">Ajouter un animal</Link>
                  </li>
                )}
              </ul>
            </li>

            <li>
              <Link
                href={'#'}
                onClick={() => {
                  setActiveComponent('adoption');
                  openModal();
                }}
              >
                {' '}
                Demande(s) d'adoption
              </Link>
            </li>

            <li>
              <Link href={'#'} onClick={() => setActiveComponent('accomodations')}>
                Demande(s) d'hébergement
              </Link>
            </li>

            <li>
              <Link
                href={'#'}
                onClick={() => {
                  setActiveComponent('messages');
                  openModal();
                }}
              >
                Messages
              </Link>
            </li>

            {userConnected.role_id === 1 && (
              <li onClick={() => setActiveComponent('admin')}>
                <Link href="">Gestion des utilisateurs</Link>
              </li>
            )}

            <label
              htmlFor="my-drawer-2"
              className="btn bg-primary-color hover:bg-secondary-color drawer-button lg:hidden mb-8"
            >
              Fermer
            </label>
          </ul>
        </div>
      </div>
    </>
  );
}
