import Image from 'next/image';

export default function Img({ photo, isOpen }) {
  if (!photo) {
    return '';
  }

  return (
    <>
      <div className="w-full h-80 relative overflow-hidden rounded-lg">
        <Image
          src={photo}
          alt="Animal"
          fill
          style={{ objectFit: isOpen ? 'contain' : 'cover' }}
        />
      </div>
    </>
  );
}
