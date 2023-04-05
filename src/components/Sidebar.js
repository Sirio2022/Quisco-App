import Categoria from './Categoria';
import Image from 'next/image';
import useQuisco from '@/hooks/useQuisco';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();
  const { categorias } = useQuisco();

  return (
    <>
      <div>
        <Image
          onClick={() => router.push('/')}
          width={300}
          height={100}
          src="/assets/img/logo.svg"
          alt="Logo"
          style={{
            margin: '10px auto',
            width: '300px',
            height: '100px',
            cursor: 'pointer',
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
