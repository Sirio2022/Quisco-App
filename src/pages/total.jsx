import Layout from '@/layout/Layout';
import useQuisco from '@/hooks/useQuisco';
import { useEffect, useCallback } from 'react';

export default function Total() {
  const { pedido } = useQuisco();
  console.log(pedido);

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0;
  }, [pedido]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  function colocarOrden(e) {
    e.preventDefault();
    console.log('colocando orden');
  }
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
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            <span className="font-bold">Total a pagar: </span>
            <span className="font-bold text-2xl">$1000</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={
              pedido.length === 0
                ? 'bg-gray-700 w-full md:w-1/3 mt-5 p-2 text-center text-white uppercase rounded'
                : 'bg-gray-700 w-full md:w-1/3 mt-5 p-2 text-center text-white uppercase rounded hover:bg-gray-900 cursor-pointer'
            }
            value="Confirmar Pedido"
            disabled={comprobarPedido()} // Si el pedido esta vacio, deshabilitamos el boton
          />
        </div>
      </form>
    </Layout>
  );
}
