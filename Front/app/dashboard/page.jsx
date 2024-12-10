import { AnimalProvider } from '../context/animalContext';
import ProtectedRoute from '../ui/animals/ProtectedRoute';
import Dashboard from '../ui/dashboard/Dashboard';
import Footer from '../ui/footer/Footer';
import Header from '../ui/header/Header';

export default function dashboardPage() {
  return (
    <>
      <ProtectedRoute>
        <AnimalProvider>
          <Header />
          <Dashboard />
          <Footer />
        </AnimalProvider>
      </ProtectedRoute>
    </>
  );
}
