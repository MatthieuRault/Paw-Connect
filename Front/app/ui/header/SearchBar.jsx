import { useState } from 'react';
import { searchAnimal } from '../../services/Search';
import Modal from '../card/Modal';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const handleSearch = async (term) => {
    const formattedTerm = capitalizeFirstLetter(term);
    setQuery(formattedTerm);
    if (formattedTerm.length > 0) {
      try {
        const searchFilters = { species: formattedTerm };
        const response = await searchAnimal(searchFilters);
        setResults(response);
      } catch (error) {
        console.error(error);
      }
    } else {
      setResults([]);
    }
  };
  // console.log(results);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(query);
    }
  };

  const handleInputChange = (e) => {
    const formattedTerm = e.target.value;
    setQuery(formattedTerm);
    handleSearch(formattedTerm);
  };

  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnimal(null);
    resetSearch(); // call to function to reboot the Search bar
  };

  const resetSearch = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <div className="relative m-2 w-full sm:w-64 z-10">
      <input
        type="text"
        placeholder="Rechercher un animal, ex : chat"
        className="input input-bordered input-accent w-full max-w-xs"
        name="search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {results.length > 0 && (
        <div className="absolute mt-1 w-full max-w-xs bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="max-h-60 overflow-auto">
            {results.map((result) => (
              <li
                key={result.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleAnimalClick(result)}
              >
                {result.name} - {result.species}
              </li>
            ))}
          </ul>
        </div>
      )}
      {isModalOpen && selectedAnimal && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} animal={selectedAnimal} />
      )}
    </div>
  );
}
