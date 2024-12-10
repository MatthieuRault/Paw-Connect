import Footer from "../footer/Footer";
import NavBar from "../header/Navbar";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="flex-1 flex flex-row justify-between p-8">
        <div className="flex-1 flex flex-col justify-center leading-none pr-8">
          <h1 className="text-4xl font-bold mb-8 mt-4 text-center">À Propos de Nous</h1>

          <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
          <p className="text-xl leading-none mb-2">
            Bienvenue sur Paw Connect, la plateforme dédiée à l'adoption et à l'hébergement des animaux.
          </p>
          <p className="text-xl leading-none mb-4">
            Nous connectons les refuges avec des adopteurs et des hébergeurs pour offrir un foyer aimant aux animaux dans le besoin.
          </p>

          <h2 className="text-3xl font-bold mb-4">Ce Que Nous Faisons</h2>
          <h3 className="text-2xl font-semibold underline mb-2">Pour les Refuges :</h3>
          <p className="text-xl leading-none mb-4">
            Augmentez la visibilité de vos animaux et trouvez des familles prêtes à les accueillir.
          </p>

          <h3 className="text-2xl font-semibold underline mb-2">Pour les Adopteurs :</h3>
          <p className="text-xl leading-none mb-4">
            Découvrez des animaux prêts à être adoptés et trouvez celui qui correspond à votre famille.
          </p>

          <h3 className="text-2xl font-semibold underline mb-2">Pour les Hébergeurs :</h3>
          <p className="text-xl leading-none mb-4">
            Offrez un foyer temporaire aux animaux en attente d'une adoption permanente.
          </p>

          <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir Paw Connect ?</h2>
          <h3 className="text-2xl font-semibold underline mb-2">Visibilité Accrue :</h3>
          <p className="text-xl leading-none mb-4">
            Aidez les refuges à promouvoir leurs animaux.
          </p>
          <h3 className="text-2xl font-semibold underline mb-2">Connexion Facile :</h3>
          <p className="text-xl leading-none mb-4">
            Trouvez rapidement des animaux à adopter ou des opportunités d'hébergement.
          </p>
          <h3 className="text-2xl font-semibold underline mb-2">Support Continu :</h3>
          <p className="text-xl leading-none mb-4">
            Recevez de l'aide et des ressources pour améliorer le bien-être animal.
          </p>

          <h2 className="text-3xl font-bold mb-4">Rejoignez-Nous</h2>
          <p className="text-xl leading-none mb-4">
            Faites une différence aujourd'hui. Contactez-nous à [adresse e-mail] ou suivez-nous sur [réseaux sociaux] pour en savoir plus.
          </p>
        </div>

        <div className="w-1/2 flex items-start justify-center p-4">
          <img src="apropos.png" alt="Description de l'image" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;