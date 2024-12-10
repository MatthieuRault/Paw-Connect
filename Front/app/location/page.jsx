'use client';

import NavBar from '../ui/header/Navbar';
import Footer from '../ui/footer/Footer';
import Location from '../ui/location/Location';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { filterMarkersByRadius, geocodeAddress } from '../utils/mapUtils';

import { animalAssociations } from '../data/Associations';
import Loader from '../ui/loader';

const Maps = dynamic(() => import('../ui/location/Maps'), { ssr: false });

export default function LocationPage() {
  const [center, setCenter] = useState([48.8566, 2.3522]); // Paris by default
  const [zoom, setZoom] = useState(6); // Zoom initial to see Europe area
  const [markers, setMarkers] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let watchId;

    async function updateLocation(position) {
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setUserLocation(location);
      setCenter([location.lat, location.lng]);

      // Filter all associations in a radius of 1000 km
      const nearbyAssociations = filterMarkersByRadius(
        animalAssociations,
        location.lat,
        location.lng,
        1000, // radius 1000km
      );
      setMarkers(nearbyAssociations);
    }

    function handleError(error) {
      console.error('Erreur de géolocalisation:', error);
      setError(error.message);
      setMarkers(animalAssociations); // Display all association if error
    }

    if ('geolocation' in navigator) {
      // get initial position :
      navigator.geolocation.getCurrentPosition(updateLocation, handleError);

      // Follow position change
      watchId = navigator.geolocation.watchPosition(updateLocation, handleError);
    } else {
      setError("La géolocalisation n'est pas supportée par votre navigateur.");
      setMarkers(animalAssociations);
    }

    // Clean the observer when the component is disassembled
    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  if (error) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Location />
      <div className="text-center m-5 text-xl">
        <Maps center={center} zoom={zoom} markers={markers} userLocation={userLocation} />
      </div>
      <Footer />
    </>
  );
}
