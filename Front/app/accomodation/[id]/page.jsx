import Footer from '../../ui/footer/Footer';
import Header from '../../ui/header/Header';
import AccomodationForm from '../../ui/accomodationForm/AccomodationForm';
import ProtectedRoute from '../../ui/animals/ProtectedRoute';
import { AnimalProvider } from '../../context/animalContext';
import { AuthProvider } from '../../context/authContext';

export default function Accomodation() {
  return (
    <ProtectedRoute>
      <AuthProvider>
        <AnimalProvider>
          <Header />
          <AccomodationForm />
          <Footer />
        </AnimalProvider>
      </AuthProvider>
    </ProtectedRoute>
  );
}
