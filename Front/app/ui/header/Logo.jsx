import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <>
      <Link href="/" className="text-xl ">
        <Image src="/logo.png" alt="logo" width={220} height={220}></Image>
      </Link>
    </>
  );
}
