'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '../loader';
import { useAuth } from '../../context/authContext';

export default function ProtectedRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const { isLogged, setIsLogged } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('jwt_token');
      if (!token) {
        setIsLogged(false);
        router.push('/login');
      } else {
        setIsLogged(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router, setIsLogged]);

  if (isLoading) {
    return <Loader />;
  }

  return isLogged ? children : null;
}
