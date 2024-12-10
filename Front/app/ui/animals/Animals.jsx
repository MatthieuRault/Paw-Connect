'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Cards from './Cards';
import Filtres from './Filtres';
import Rules from './Rules';

export default function Animals() {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);

  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
  };

  return (
    <>
      <Rules />
      <div className="flex flex-wrap gap-5 justify-center  mb-5">
        <Filtres onReload={handleReload} />
        <Cards reload={reload} />
      </div>
    </>
  );
}
