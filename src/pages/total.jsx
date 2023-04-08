import Layout from '@/layout/Layout';
import useQuisco from '@/hooks/useQuisco';
import { useEffect, useCallback } from 'react';
import { formatearDinero } from '@/helpers';

export default function Total() {
  const { pedido, total, setNombre, nombre, colocarOrden } = useQuisco();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 5;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    <Layout pagina="Total y confirmar pedido">
      <h1 className="text-4xl font-black ">Total y confirmar pedido</h1>
      <p className="text-2xl my-10">
        Revisa tu pedido antes de proceder al pago
      </p>

      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            className="w-full bg-gray-200  md:w-1/3 border border-gray-300 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            <span className="font-bold">Total a pagar: </span>
            <span className="font-bold text-2xl">{formatearDinero(total)}</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={`${
              comprobarPedido()
                ? 'bg-indigo-100'
                : 'bg-indigo-600 cursor-pointer hover:bg-indigo-700'
            } w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center `}
            value="Confirmar Pedido"
            disabled={comprobarPedido()} // Si el pedido esta vacio, deshabilitamos el boton
          />
        </div>
      </form>
    </Layout>
  );
}
