import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/layout/Layout';
import useQuisco from '@/hooks/useQuisco';

export default function Home() {
  const { categoriaActual } = useQuisco();

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
    </Layout>
  );
}
