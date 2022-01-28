import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditarCliente = () => {

  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const obtenerClienteAPI = async () => {
        try {
            const url = `http://localhost:4000/clientes/${id}`
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setCliente(resultado);
        } catch (error) {
            console.log(error)
        }

        setTimeout(() => {
            setCargando(!cargando);
        }, 1000);

    }
    obtenerClienteAPI();
  }, []); 

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900 text-center">Editar cliente</h1>
      <p className="mt-3 text-center">Utiliza este formulario para editar los datos del cliente:</p>
      
      {Object.keys(cliente).length === 0 ? (
        <p className='mt-20 text-center font-bold'>Usuario no existente.</p>
      ) : (
      <Formulario 
        cliente={cliente}
        cargando={cargando}
      />
      ) }
    </>
  )
};

export default EditarCliente;
