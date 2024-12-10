import Menu from './Menu';
import { deleteRequest, getAllRequests, updateRequest } from '../../services/Request';
import Loader from '../loader';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useToast } from '../../context/toastContext';
import { useAnimal } from '../../context/animalContext';

export default function Accomodations() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const { userConnected } = useAuth();
  const { showToastMessage } = useToast();
  const { animalData } = useAnimal(); // Use the context to get animal data

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getAllRequests();
        const { requests: data } = response;
        setRequests(data);
        setLoading(false);
        
        // Filter notifications based on the connected user's role
        const filteredNotifications = data.filter((request) => {
          if (userConnected.role_id === 1) {
            // Admin sees all pending notifications
            return request.status === 'En attente';
          }
          if (userConnected.role_id === 2) {
            // Member sees notifications they've made
            return request.status === 'En attente' && request.user_id === userConnected.id;
          }
          if (userConnected.role_id === 3) {
            // Association sees notifications they've received
            const associationAnimals = animalData.filter(
              (animal) =>
                animal.user.role_id === userConnected.role_id &&
                animal.user_id === userConnected.id,
            );
            const associationAnimalIds = associationAnimals.map((animal) => animal.id);
            return (
              request.status === 'En attente' && associationAnimalIds.includes(request.animal_id)
            );
          }
          return false;
        });

        setNotifications(filteredNotifications);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch requests. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, [userConnected, animalData]);

  if (loading) {
    return <Loader />;
  }

  const filteredRequests = requests.filter((request) => {
    if (userConnected.role_id === 1) {
      // Admin sees all requests
      return true;
    }
    if (userConnected.role_id === 2) {
      // Member sees requests they've made
      return request.user_id === userConnected.id;
    }
    if (userConnected.role_id === 3) {
      // Association sees requests they've received
      const associationAnimals = animalData.filter(
        (animal) =>
          animal.user.role_id === userConnected.role_id && animal.user_id === userConnected.id,
      );
      const associationAnimalIds = associationAnimals.map((animal) => animal.id);
      return associationAnimalIds.includes(request.animal_id);
    }
    return false;
  });

  // console.log('Filtered requests:', filteredRequests);

  const handleAccept = async (requestId) => {
    try {
      await updateRequest(requestId, { status: 'Acceptée' });
      setRequests(
        requests.map((request) =>
          request.id === requestId ? { ...request, status: 'Acceptée' } : request,
        ),
      );
      setNotifications(notifications.filter((notification) => notification.id !== requestId));
      showToastMessage(10, true); // Index of the success message for acceptance
    } catch (error) {
      console.error(error);
      showToastMessage(10, false); // Index of the error message for acceptance
    }
  };

  const handleRefused = async (requestId) => {
    try {
      await updateRequest(requestId, { status: 'Refusée' });
      setRequests(
        requests.map((request) =>
          request.id === requestId ? { ...request, status: 'Refusée' } : request,
        ),
      );

      setNotifications(notifications.filter((notification) => notification.id !== requestId));

      showToastMessage(10, true); // Index of the success message for refusal
    } catch (error) {
      console.error(error);
      showToastMessage(10, false); // Index of the error message for refusal
    }
  };

  const handleDelete = async (requestId) => {
    const isConfirmed = confirm('Êtes-vous sûr de vouloir supprimer cette requête ?');
    if (isConfirmed) {
      try {
        await deleteRequest(requestId);
        setRequests(requests.filter((request) => request.id !== requestId));
        setNotifications(notifications.filter((notification) => notification.id !== requestId));
        showToastMessage(11, true); // Index of succes message to remove
      } catch (error) {
        console.error(error);
        showToastMessage(11, false); // Index of error message to remove
      }
    }
  };

  // console.log('notifications', notifications);

  return (
    <div className="w-full min-h-screen p-8">
      <Menu />

      <h1 className="text-3xl font-bold text-text-color mb-6 text-center">
        Demande(s) d'hébergement
      </h1>

      {notifications.length > 0 && (
        <div className="mb-4 bg-green-300 text-gray-800 p-4 text-xl font-bold rounded-lg shadow-md">
          Vous avez <span className="text-red-600">{notifications.length}</span> nouvelle(s)
          demande(s) d'hébergement en attente.
        </div>
      )}

      {filteredRequests.map((request) => (
        // console.log(request.user.name),
        <div key={request.id}>
          <div className="mb-4 bg-card-bg p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
            <p className="shadow appearance-none bg-background-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline">
              {' '}
              Identification utilisateur : {request.user.name}
            </p>
            <p className="shadow appearance-none bg-background-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline">
              {' '}
              Identification animal : {request.animal.name}
            </p>
            <p className="shadow appearance-none bg-background-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline">
              {' '}
              Date : {request.date}
            </p>
            <p className="shadow appearance-none bg-background-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline">
              {' '}
              Status : {request.status}{' '}
            </p>

            {(userConnected.role_id === 1 || userConnected.role_id === 3) && (
              <div className="flex flex-wrap justify-between gap-2 mt-6 ">
                <button
                  type="button"
                  className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/3 block mx-auto text-base font-caveat"
                  onClick={() => handleAccept(request.id)}
                >
                  Accepter
                </button>
                <button
                  type="button"
                  className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/3 block mx-auto text-base font-caveat"
                  onClick={() => handleRefused(request.id)}
                >
                  Refuser
                </button>

                {userConnected.role_id === 1 && (
                  <button
                    type="button"
                    className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/3 block mx-auto text-base font-caveat"
                    onClick={() => handleDelete(request.id)}
                  >
                    Supprimer
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
