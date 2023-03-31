import Image from 'next/image';
import useQuisco from '@/hooks/useQuisco';

export default function Categoria({ categoria }) {
  const { nombre, icono, id } = categoria; // destructuring

  const { handleClickCategoria, categoriaActual } = useQuisco();

  return (
    <div
      className={`flex items-center gap-2 w-full border p-5 hover:bg-amber-400 ${
        categoriaActual?.id === id ? 'bg-amber-400' : ''
      } `}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt={nombre}
        style={{ width: '70px', height: '70px' }}
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
}
