import { useFilter } from '../../context/filterContex';
import Card from '../card/Card';
import { usePathname } from 'next/navigation';

export default function Cards({ reload }) {
  const { filteredAnimals } = useFilter();
  const pathname = usePathname();

  return (
    <>
      <div className="w-11/12 sm:w-4/5 mt-5 mb-5 rounded-xl">
        <h1 className="text-center text-3xl mt-6 mb-6">Les animaux</h1>
        <Card animals={pathname === '/animals' ? filteredAnimals : []} onReload={reload} />
      </div>
    </>
  );
}
