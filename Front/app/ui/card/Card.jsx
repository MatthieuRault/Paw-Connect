'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Img from './Img';
import Refuge from './Refuge';
import Title from './Title';
import Modal from './Modal';
import Loader from '../loader';
import { getAnimals } from '../../services/Home';
import { getAllAnimals } from '../../services/Animals';
import { setUrlAnimal } from '../../utils/url';
import { useFilter } from '../../context/filterContex';

export default function Card({ onReload }) {
  const [animals, setAnimals] = useState([]);
  const [internalReload, setInternalReload] = useState(false);
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);
  const { filteredAnimals, applyFilters, filters, resetFilters } = useFilter();
  const [prevFilters, setPrevFilters] = useState(filters);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setInternalReload(onReload);
  }, [onReload]);

  useEffect(() => {
    if (isClient) {
      const fetchData = async () => {
        let data;
        if (pathname === '/') {
          data = await getAnimals();
        } else if (pathname === '/animals') {
          data = await getAllAnimals();
        }
        if (data) {
          setAnimals(data);
          applyFiltersIfNeeded(data);
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [pathname, isClient, internalReload]);

  useEffect(() => {
    if (pathname === '/animals' && filteredAnimals.length > 0) {
      setAnimals(filteredAnimals);
    }
  }, [filteredAnimals, pathname]);

  const applyFiltersIfNeeded = (data) => {
    if (JSON.stringify(filters) !== JSON.stringify(prevFilters)) {
      applyFilters(data);
      setPrevFilters(filters);
    }
  };

  const handleResetFilters = () => {
    resetFilters();
    applyFilters(animals);
  };

  const handleOpenModal = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleCloseModal = () => {
    setSelectedAnimal(null);
  };

  if (!isClient) {
    return <Loader />; // or a loading indicator
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap justify-center gap-10 m-">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="w-80 bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg"
            >
              <Img photo={setUrlAnimal(animal.photo)} />
              <div className="p-4">
                <Title name={animal.name} gender={animal.gender} />
                <Refuge refuge={animal.user.name} />
                <p>
                  Disponibilité :
                  {animal.availability ? (
                    <span className="text-green-500"> ✅</span>
                  ) : (
                    <span className="text-red-500"> ❌</span>
                  )}
                </p>
                <button
                  className="bg-secondary-color text-white text-center px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/2 block mx-auto text-2xl  font-bold font-caveat"
                  onClick={() => handleOpenModal(animal)}
                >
                  Détails
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedAnimal && <Modal isOpen={true} onClose={handleCloseModal} animal={selectedAnimal} />}
    </>
  );
}
