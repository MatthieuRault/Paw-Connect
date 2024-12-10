import NavBar from '../../ui/header/Navbar';
import Footer from '../../ui/footer/Footer';
import { Add } from '../../ui/animals/Add';
import ProtectedRoute from '../../ui/animals/ProtectedRoute';

export default function AddAnimals() {
  return (
    <ProtectedRoute>
      <>
        <NavBar />
        <Add />
        <Footer />
      </>
    </ProtectedRoute>
  );
}
