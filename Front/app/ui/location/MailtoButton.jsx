export default function MailtoButton({ email }) {
  const mailtoLink = `mailto:${email}`; // generated link mailto using the email sent in Props

  return (
    <a
      href={mailtoLink}
      className="inline-block bg-secondary-color text-gray-900 px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/2 mx-auto text-xl font-bold font-caveat text-center no-underline"
    >
      Contacter le refuge
    </a>
  );
}
