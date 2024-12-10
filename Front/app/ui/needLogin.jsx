'use client';

import { useAuth } from '../context/authContext';
import Homeimg from './homeimg/Homeimg';
import Modal from './loginModal/Modal';

export default function NeedLogin() {
  const { isLogged, userConnected, handleLogout } = useAuth();

  return (
    <>
      <Homeimg />
      <div className="text-center text-4xl m-8">
        <h1>Veuillez vous connecter pour accéder à cette page</h1>
        <div> Cliquez ici : </div>
        <div className="flex justify-center gap-5 bg-secondary-color text-white text-center px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/2 block mx-auto text-2xl  font-bold font-caveat">
          {' '}
          <Modal />
          {isLogged ? userConnected.name : null}
        </div>
      </div>
    </>
  );
}
