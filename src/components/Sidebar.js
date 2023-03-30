import Image from 'next/image';

export default function Sidebar() {
  return (
    <>
      <div>
        <Image
          width={150}
          height={100}
          src="/assets/img/logo.svg"
          alt="Logo"
          style={{ margin: 'auto' }} // This is the only way I found to center the image
        />
      </div>
    </>
  );
}
