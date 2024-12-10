import Link from 'next/link';

export default function Rules() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="hero h-96 mt-8 mb-8 w-11/12 align-middle"
        style={{
          backgroundImage: 'url(/chien.webp)',
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="relative  p-8 rounded-lg">
            <Link
              href="https://www.service-public.fr/particuliers/vosdroits/F34877"
              passHref
              target="_blank"
            >
              <h1 className="text-center text-5xl mt-8 mb-8">
                Cliquez ici pour consulter les règles d'adoption
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
