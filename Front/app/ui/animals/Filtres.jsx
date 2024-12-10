import { useEffect, useState } from 'react';
import { getAllAnimals } from '../../services/Animals';
import { useFilter } from '../../context/filterContex';
import { usePathname } from 'next/navigation';

export default function Filtres({ onReload }) {
  const { filters, setFilters, applyFilters, resetFilters } = useFilter();
  const [animals, setAnimals] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const data = await getAllAnimals();
        setAnimals(data);
        if (pathname === '/animals') {
          applyFilters(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimals();
  }, [pathname]); // called if pathname change

  useEffect(() => {
    if (pathname === '/animals') {
      applyFilters(animals);
    }
  }, [filters, pathname, animals]); // Called if the filters or animals change

  const handleResetFilters = () => {
    resetFilters();
    if (pathname === '/animals') {
      applyFilters(animals);
    }
    onReload();
  };

  const getUniqueSpecies = () => {
    const speciesMap = {};
    animals.forEach((animal) => {
      const lowerCaseSpecies = animal.species.toLowerCase();
      if (!speciesMap[lowerCaseSpecies]) {
        speciesMap[lowerCaseSpecies] = animal.species;
      }
    });
    return Object.values(speciesMap);
  };

  const uniqueSpecies = getUniqueSpecies();

  return (
    <>
      <div className="w-4/5 sm:w-1/6 md:w-4/5 lg:w-1/6 bg-background-color flex flex-col items-center max-h-screen mt-5 mb-5 rounded-xl">
        <h3 className="text-center text-3xl mt-6 mb-6">Filtres</h3>
        <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">Âge</div>
          <div className="collapse-content bg-secondary-color">
            <label htmlFor="age-range" className="block mb-2 text-lg">
              Sélectionnez un âge :
            </label>
            <input
              type="range"
              id="age-range"
              min="1"
              max="20"
              value={filters.age}
              className="range"
              step="1"
              onChange={(e) => setFilters({ ...filters, age: e.target.value })}
            />
            <div className="flex w-full justify-between px-2 text-xs">
              {[...Array(20)].map((_, index) => (
                <span key={index + 1}>{index + 1}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Sexe</div>
          <div className="collapse-content bg-secondary-color flex justify-evenly">
            <label>
              <input
                type="radio"
                name="gender"
                value="Mâle"
                className="mt-5"
                checked={filters.gender === 'Mâle'}
                onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
              />
              Mâle
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Femelle"
                className="mt-5"
                checked={filters.gender === 'Femelle'}
                onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
              />
              Femelle
            </label>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Espèces</div>
          <div className="collapse-content bg-secondary-color flex justify-evenly">
            {uniqueSpecies.map((species) => (
              <label key={species} className="block mb-2 mt-5">
                <input
                  type="radio"
                  name="species"
                  value={species}
                  checked={filters.species === species}
                  onChange={(e) => setFilters({ ...filters, species: e.target.value })}
                  className="mr-2"
                />
                {species}
              </label>
            ))}
          </div>
        </div>
        <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Disponibilité</div>
          <div className="collapse-content bg-secondary-color flex justify-evenly">
            <label>
              <input
                type="radio"
                name="availability"
                value="true"
                className="mt-5"
                checked={filters.availability === 'true'}
                onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
              />
              Oui
            </label>
            <label>
              <input
                type="radio"
                name="availability"
                value="false"
                checked={filters.availability === 'false'}
                onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                className="mt-5"
              />
              Non
            </label>
          </div>
        </div>
        <button
          className="bg-secondary-color text-white px-4 py-2 rounded-full mt-4 mb-4 hover:bg-primary-color transition-colors duration-300 ease-in-out block mx-auto text-xl font-bold font-caveat"
          type="button"
          onClick={handleResetFilters}
        >
          Réinitialiser les filtres
        </button>
      </div>
    </>
  );
}
