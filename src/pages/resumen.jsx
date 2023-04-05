import Layout from '@/layout/Layout';
import useQuisco from '@/hooks/useQuisco';
import ResumenProducto from '@/components/ResumenProducto';

export default function Resumen() {
  const { pedido } = useQuisco();
  return (
    <Layout pagina="Resumen">
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">
        Revisa tu pedido antes de proceder al pago
      </p>

      {pedido.length === 0 ? (
        <p className="text-2xl text-center">No hay productos en el pedido</p>
      ) : (
        pedido.map((producto) => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
}
