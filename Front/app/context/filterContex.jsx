'use client';

import { createContext, useContext, useState } from 'react';

const FilterContext = createContext(undefined);

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    age: '',
    gender: '',
    species: '',
    race: '',
    availability: '',
  });
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  const calculateAge = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const applyFilters = async (animals) => {
    const filtered = animals.filter((animal) => {
      const age = calculateAge(animal.birthday);
      return (
        (filters.age === '' || age <= parseInt(filters.age)) &&
        (filters.gender === '' || animal.gender === filters.gender) &&
        (filters.species === '' || animal.species === filters.species) &&
        (filters.race === '' || animal.race === filters.race) &&
        (filters.availability === '' || animal.availability === (filters.availability === 'true'))
      );
    });
    setFilteredAnimals(filtered);
  };

  const resetFilters = () => {
    setFilters({
      age: '',
      gender: '',
      species: '',
      race: '',
      availability: '',
    });
  };

  return (
    <FilterContext.Provider
      value={{ filters, setFilters, filteredAnimals, applyFilters, resetFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
