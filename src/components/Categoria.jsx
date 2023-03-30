import Image from 'next/image';

export default function Categoria({ categoria }) {
  const { nombre, icono, id } = categoria; // destructuring

  return (
    <div className="flex items-center gap-2 w-full border p-5 hover:bg-amber-400">
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt={nombre}
      />
      <button type="button" className="text-2xl font-bold hover:cursor-pointer">
        {nombre}
      </button>
    </div>
  );
}
