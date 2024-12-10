'use client';

import Link from 'next/link';
import Img from './Img';
import { setUrlAnimal } from '../../utils/url';

export default function Modal({ isOpen, onClose, animal }) {
  if (!isOpen || !animal) return null;

  return (
    <dialog id={`modal_${animal.id}`} className="modal" open={isOpen}>
      <div className="modal-box w-11/12 max-w-3xl">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-2xl text-center m-4">{animal.name}</h3>

        <Img photo={setUrlAnimal(animal.photo)} isOpen={isOpen} />
        <div className="bg-primary-color rounded-xl mt-4">
          <h3 className="font-bold text-center p-2 m-5 mb-0 text-2xl">Description de l'animal</h3>
          <ul className="p-4 text-xl font-bold">
            <li>Nom : {animal.name}</li>
            <li>Informations : {animal.description}</li>
            <li>Anniversaire : {animal.birthday}</li>
            <li>Race : {animal.race}</li>
            <li>Disponibilité : {animal.availability ? 'Disponible' : 'Non disponible'}</li>
          </ul>
        </div>
        <div className="flex space-x-4 mt-4">
          {animal.availability ? (
            <Link
              className="bg-secondary-color text-white text-center px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/2 block mx-auto text-2xl  font-bold font-caveat"
              href={`/accomodation/${animal.id}`}
            >
              Héberger
            </Link>
          ) : (
            <button
              className="bg-gray-600 text-white text-center px-4 py-2 rounded-full mt-4 transition-colors duration-300 ease-in-out w-1/2 block mx-auto text-2xl  font-bold font-caveat"
              disabled
            >
              Héberger
            </button>
          )}

          {animal.availability ? (
            <Link
              className="bg-secondary-color text-white text-center px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/2 block mx-auto text-2xl  font-bold font-caveat"
              href={'/adoption'}
            >
              Adopter
            </Link>
          ) : (
            <button
              className="bg-gray-600 text-white text-center px-4 py-2 rounded-full mt-4 transition-colors duration-300 ease-in-out w-1/2 block mx-auto text-2xl  font-bold font-caveat"
              disabled
            >
              Adopter
            </button>
          )}
        </div>
      </div>
    </dialog>
  );
}
