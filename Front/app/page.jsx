import { FilterProvider } from './context/filterContex';
import Button from './ui/button';
import Card from './ui/card/Card';
import Footer from './ui/footer/Footer';
import Header from './ui/header/Header';
import Homeimg from './ui/homeimg/Homeimg';

export default function Home() {
  return (
    <>
      <FilterProvider>
        <Header />
        <Homeimg />
        <Card />
        <Button />
        <Footer />
      </FilterProvider>
    </>
  );
}
