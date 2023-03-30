import Categoria from './Categoria';
import Image from 'next/image';
import useQuisco from '@/hooks/useQuisco';

export default function Sidebar() {
  const { categorias } = useQuisco();

  return (
    <>
      <div>
        <Image
        
          width={300}
          height={100}
          src="/assets/img/logo.svg"
          alt="Logo"
          style={{
            margin: 'auto',
            width: '300px',
            height: '100px',
          }}
        />

        <nav className="mt-10">
          {categorias.map((categoria) => {
            return <Categoria key={categoria.id} categoria={categoria} />;
          })}
        </nav>
      </div>
    </>
  );
}
