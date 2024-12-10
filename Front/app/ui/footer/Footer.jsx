import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-primary-color">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 text-gray-900 flex flex-wrap justify-center text-lg flex justify-between">
        <div className="p-5">
          <div className="text-xl uppercase text-gray-900 font-medium">Crédits</div>
          <Link
            href={'https://www.linkedin.com/in/st%C3%A9phane-lenoir-dev77/'}
            className="my-3 block link link-hover"
            target="_blank"
          >
            Stéphane
          </Link>
          <Link
            href={'https://www.linkedin.com/in/matthieu-rault-dev/'}
            className="my-3 block link link-hover"
            target="_blank"
          >
            Matthieu
          </Link>
          <Link
            href={'https://www.linkedin.com/in/paulus--julien/'}
            className="my-3 block link link-hover"
            target="_blank"
          >
            Julien
          </Link>
          <Link
            href={'https://www.linkedin.com/in/dylan-gavaud/'}
            className="my-3 block link link-hover"
            target="_blank"
          >
            Dylan
          </Link>
          <Link
            href={'https://www.linkedin.com/in/fabien-bourdais/'}
            className="my-3 block link link-hover"
            target="_blank"
          >
            Fabien
          </Link>
        </div>

        <div className="p-5">
          <div className="text-xl uppercase text-gray-900 font-medium">Liens</div>
          <Link href={'/'} className="my-3 block link link-hover">
            Accueil
          </Link>
          <Link href={'/animals'} className="my-3 block link link-hover">
            Adopter
          </Link>
          <Link href={'/location'} className="my-3 block link link-hover">
            Localiser
          </Link>
          <Link href={'#'} className="my-3 block link link-hover">
            Dons
          </Link>
        </div>

        <div className="p-5">
          <div className="text-xl uppercase text-gray-900 font-medium">Legal</div>
          <Link href={'/terms'} className="my-3 block link link-hover">
            Conditions d'utilisation
          </Link>
          <Link href={'/privacy'} className="my-3 block link link-hover">
            Politique de confidentialité
          </Link>
          <Link href={'/cookies'} className="my-3 block link link-hover">
            Politique de cookies
          </Link>
        </div>

        <div className="p-5">
          <div className="text-xl uppercase text-gray-900 font-medium">Company</div>
          <Link href={'/about'} className="my-3 block link link-hover">
            À propos
          </Link>
          <Link
            href={'mailto:pawconnect@gmail.com'}
            className="my-3 block link link-hover"
            target="_blank"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
