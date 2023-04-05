import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const QuiscoContext = createContext();

const QuiscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);

  const router = useRouter();

  const obtenerCategorias = async () => {
    const { data } = await axios.get('/api/categorias');
    setCategorias(data);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
    router.push('/');
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((prod) => prod.id === producto.id)) {
      // El some es para buscar en un array de objetos  y retorna true o false!
      // Si el producto ya existe en el pedido, vamos a actualizar el pedido
      const pedidoActualizado = pedido.map(
        (prod) => (prod.id === producto.id ? producto : prod) // Si el id del producto es igual al id del producto que estamos actualizando, entonces actualizamos el producto, sino, devolvemos el producto que ya estaba en el pedido.
      );
      setPedido(pedidoActualizado);
      toast.success('Producto actualizado', { autoClose: 1000 });
    } else {
      // Si el producto no existe en el pedido

      setPedido([...pedido, producto]); // Agregar producto al pedido
      toast.success('Producto agregado al pedido', { autoClose: 1000 });
    }
    setModal(false);
  };

  const handleEditarCantidad = (id) => {
    const procuctoActualizado = pedido.filter((prod) => prod.id === id);
    setProducto(procuctoActualizado[0]);
    setModal(!modal);
  };

  const handleEliminarProducto = (id) => {
    const pedidoActualizado = pedido.filter((prod) => prod.id !== id);
    setPedido(pedidoActualizado);
  };

  return (
    <QuiscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        pedido,
        handleAgregarPedido,
        handleEditarCantidad,
        handleEliminarProducto,
      }}
    >
      {children}
    </QuiscoContext.Provider>
  );
};

export { QuiscoProvider };

export default QuiscoContext;
