import useSWR from 'swr';
import axios from 'axios';
import AdminLayout from '@/layout/AdminLayout';
import Orden from '@/components/Orden';

export default function admin() {
  const fetcher = () => axios.get('/api/ordenes').then((res) => res.data);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useSWR('/api/ordenes', fetcher);

  return (
    <AdminLayout pagina={'Admin'}>
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className="text-2xl my-10">Administra las ordenes de los clientes</p>

      {data && data.length ? (
        data.map((orden) => <Orden key={orden.id} orden={orden} />)
      ) : (
        <p>No hay ordenes</p>
      )}
    </AdminLayout>
  );
}
