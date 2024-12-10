import Image from 'next/image';

export default function CardImage() {
  return (
    <>
      <Image
        src="/refugeapak.jpg"
        alt="Refuge pour animaux"
        className="max-w-auto h-auto bg-primary-color text-white flex items-center justify-center text-xl font-bold"
        width={400}
        height={500}
      ></Image>
    </>
  );
}
