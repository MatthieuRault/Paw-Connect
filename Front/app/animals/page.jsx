import NavBar from '../ui/header/Navbar';
import Footer from '../ui/footer/Footer';
import Animals from '../ui/animals/Animals';
import { FilterProvider } from '../context/filterContex';

export default function animalPage() {
  return (
    <>
      <FilterProvider>
        <NavBar />
        <Animals />
        <Footer />
      </FilterProvider>
    </>
  );
}
