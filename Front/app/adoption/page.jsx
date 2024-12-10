import Footer from '../ui/footer/Footer';
import Header from '../ui/header/Header';
import AdoptionForm from '../ui/adoptionForm/AdoptionForm';
import ProtectedRoute from '../ui/animals/ProtectedRoute';
import { AnimalProvider } from '../context/animalContext';

export default function Adoption() {
  return (
    <>
      <ProtectedRoute>
        <AnimalProvider>
          <Header />
          <AdoptionForm />
          <Footer />
        </AnimalProvider>
      </ProtectedRoute>
    </>
  );
}
