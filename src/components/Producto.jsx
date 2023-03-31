import Image from 'next/image';
import { formatearDinero } from '@/helpers';
import useQuisco from '@/hooks/useQuisco';

export default function Producto({ producto }) {
  const { nombre, precio, imagen } = producto;

  const { handleSetProducto, handleChangeModal } = useQuisco();

  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen ${nombre}`}
        width={400}
        height={500}
        style={{ width: '400px', height: '350px' }}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="text-4xl font-black mt-5 text-amber-500">
          {formatearDinero(precio)}
        </p>

        <button
          type="button"
          className="bg-amber-500 hover:bg-amber-600 w-full mt-5 p-3 text-white uppercase font-bold"
          onClick={() => {
            handleSetProducto(producto);
            handleChangeModal();
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
