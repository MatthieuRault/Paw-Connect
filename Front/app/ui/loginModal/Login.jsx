import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { useEffect } from 'react';
import { useToast } from '../../context/toastContext';

export default function Login() {
  const { isLogged, setIsLogged, setUserConnected, userConnected } = useAuth();
  const { showToastMessage } = useToast(); // Use the toast context

  useEffect(() => {
    const checkTokenExpiration = () => {
      const tokenExpiration = localStorage.getItem('tokenExpiration');
      if (tokenExpiration && Date.now() > Number(tokenExpiration)) {
        localStorage.clear();
        setIsLogged(false);
        setUserConnected(null);
      }
    };

    // Check token expiration every second
    const intervalId = setInterval(checkTokenExpiration, 1000);
    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [setIsLogged, setUserConnected]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Check if all fields are filled
    if (!data.email || !data.password) {
      showToastMessage(2, false, 'Veuillez remplir tous les champs.'); // Show error toast for login
      return;
    }

    try {
      const response = await axios.post(
        // "https://paw-connect-back.onrender.com/api/login", // Send data to the backend deployed on Render
        'http://localhost:3000/api/login', // Send data to the backend running on localhost
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true, // This is important
        },
      );

      if (response && response.status === 200) {
        const { user, token, expirationTime } = response.data;
        localStorage.setItem('jwt_token', token);
        localStorage.setItem('userConnected', JSON.stringify(user));
        localStorage.setItem('tokenExpiration', expirationTime);

        setUserConnected(user);
        setIsLogged(true); // it display the avatar

        event.target.closest('dialog').close(); // close modal

        event.target.reset(); // reset the form

        showToastMessage(2, true, 'Login réussi.'); // Show success toast for login
      } else {
        showToastMessage(2, false, 'Erreur lors de la connexion.'); // Show error toast for login
      }
    } catch (error) {
      console.error('Error while sending data', error);
      showToastMessage(2, false, 'Erreur lors de la connexion.'); // Show error toast for login
    }
  };

  return (
    <>
      <h3 className="font-bold text-2xl mb-2 text-center">Login</h3>
      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            name="email"
            placeholder="Email"
            autoComplete="email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </label>
        <button
          type="submit"
          className="btn bg-primary-color hover:bg-secondary-color text-xl w-full"
        >
          Login
        </button>
      </form>

      <div className="modal-action mt-6">
        <form method="dialog">
          <button className="btn text-xl">Fermer</button>
        </form>
      </div>
    </>
  );
}
