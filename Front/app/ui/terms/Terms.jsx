import Footer from '../footer/Footer';
import NavBar from '../header/Navbar';

const Terms = () => {
  return (
    <div>
      <NavBar />
      <div className="p-8">
        <h1 className="text-5xl font-bold mb-4 text-center">Conditions d'utilisation</h1>
        <p className="mb-2 ml-8 text-lg">Dernière mise à jour : 04/09/2024</p>
        <p className="mb-4 ml-8 text-lg">Bienvenue sur Paw Connect. </p>
        <p className="mb-4 ml-8 text-lg">
          En accédant à notre plateforme, vous acceptez de respecter et d'être lié par les présentes
          Conditions d'utilisation.
        </p>
        <p className="mb-6 ml-8 text-lg">
          Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site.
        </p>

        <h2 className="text-3xl font-semibold mb-3 ml-2">1. Objet du Site</h2>
        <p className="mb-4 ml-8 text-lg">
          Paw Connect est une plateforme en ligne qui facilite la mise en relation entre les refuges
          animaliers et les personnes souhaitant héberger temporairement ou adopter des animaux (les
          "Utilisateurs").
        </p>
        <p className="mb-6 ml-8 text-lg">
          Le Site permet aux refuges de publier des annonces d'animaux disponibles pour l'accueil ou
          l'adoption, et aux Utilisateurs de consulter ces annonces, de contacter les refuges, et de
          manifester leur intérêt.
        </p>

        <h2 className="text-3xl font-semibold mb-3 ml-2">2. Inscription et Utilisation</h2>
        <h3 className="text-2xl font-medium mb-2 ml-8">Inscription :</h3>
        <p className="mb-4 ml-8 text-lg">
          Pour accéder à certaines fonctionnalités du Site, les Utilisateurs doivent créer un
          compte.
        </p>
        <p className="mb-4 ml-8 text-lg">
          Lors de l'inscription, les Utilisateurs s'engagent à fournir des informations exactes et
          complètes. Chaque Utilisateur est responsable de la confidentialité de ses identifiants de
          connexion.
        </p>
        <h3 className="text-2xl font-medium mb-2 ml-8">Eligibilité :</h3>
        <p className="mb-4 ml-8 text-lg">
          Les Utilisateurs doivent être majeurs et avoir la capacité légale de conclure des contrats
          en vertu des lois applicables pour pouvoir s'inscrire sur le Site.
        </p>
        <h3 className="text-2xl font-medium mb-2 ml-8">Utilisation du Site :</h3>
        <p className="mb-4 ml-8 text-lg">
          Les Utilisateurs s'engagent à utiliser le Site uniquement à des fins licites et conformes
          à ces Conditions d'utilisation.
        </p>
        <p className="mb-6 ml-8 text-lg">
          Il est interdit de publier des informations fausses ou trompeuses, d'usurper l'identité
          d'une autre personne, ou d'utiliser le Site d'une manière qui pourrait nuire à d'autres
          Utilisateurs ou aux animaux.
        </p>

        <h2 className="text-3xl font-semibold mb-3 ml-2">
          3. Responsabilité des Refuges et des Utilisateurs
        </h2>
        <h3 className="text-2xl font-medium mb-2 ml-8">Refuges :</h3>
        <p className="mb-4 ml-8 text-lg">
          Les refuges sont responsables des informations qu'ils publient sur le Site, y compris les
          descriptions des animaux, les conditions d'accueil ou d'adoption, et les critères
          d'éligibilité.
        </p>
        <p className="mb-6 ml-8 text-lg">
          Les refuges doivent s'assurer que ces informations sont exactes et mises à jour.
        </p>

        <h2 className="text-3xl font-semibold mb-3 ml-2">4. Limitation de Responsabilité</h2>
        <p className="mb-4 ml-8 text-lg">
          Paw Connect n'est pas responsable de l'exactitude des informations fournies par les
          refuges ou les Utilisateurs.
        </p>
        <p className="mb-6 ml-8 text-lg">
          Le Site n'est pas non plus responsable des interactions entre les refuges et les
          Utilisateurs, y compris les problèmes liés à l'accueil ou à l'adoption d'un animal.
        </p>

        <h2 className="text-3xl font-semibold mb-3 ml-2">5. Résiliation</h2>
        <p className="mb-4 ml-8 text-lg">
          Paw Connect se réserve le droit de suspendre ou de résilier l'accès au Site à tout
          Utilisateur ou refuge en cas de violation des présentes Conditions d'utilisation, sans
          préavis et sans indemnité.
        </p>

        <h2 className="text-3xl font-semibold mb-3 ml-2">
          6. Modification des Conditions d'utilisation
        </h2>
        <p className="mb-4 ml-8 text-lg">
          Paw Connect se réserve le droit de modifier ces Conditions d'utilisation à tout moment.
          Les modifications seront publiées sur le Site, et il est de la responsabilité des
          Utilisateurs de consulter régulièrement ces conditions pour être informés des changements.
        </p>

        <h2 className="text-3xl font-semibold mb-3">7. Droit Applicable et Juridiction</h2>
        <p className="mb-4 ml-8 text-lg">
          Ces Conditions d'utilisation sont régies par les lois de la république Française.
        </p>
        <p className="mb-6 ml-8 text-lg">
          Tout litige relatif à l'utilisation du Site sera soumis à la compétence exclusive des
          tribunaux de Paris, France.
        </p>

        <h2 className="text-3xl font-semibold mb-3 ml-2">8. Contact</h2>
        <p className="mb-6 ml-8 text-lg">
          Pour toute question relative à ces Conditions d'utilisation, veuillez contacter
          pawconnect@gmail.com.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
