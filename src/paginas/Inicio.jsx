import { useEffect, useState } from "react";
import { array } from "yup";
import Cliente from "../components/Cliente";
import Spinner from "../components/Spinner";

const Inicio = () => {

  const [clientes, setClientes] = useState([])

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = import.meta.env.VITE_API_URL;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
    }

    obtenerClienteAPI();
  }, []);
  
  const handleEliminar = async (id) => {
    const confirmar = confirm('¿Estás seguro que deseas eliminar este cliente?');

    if (confirmar) {
      try {
        const url = import.meta.env.VITE_API_URL + `/${id}`
        const respuesta = await fetch(url, {
          method: 'DELETE'
        });
        await respuesta.json();
        const arrayClientes = clientes.filter(cliente => cliente.id !== id)
        setClientes(arrayClientes);
      } catch (error) {
          console.log(error);
      }
    }
  }

  return (
    Object.keys(clientes).length === 0 ? (
        <h1 className="font-black text-4xl text-blue-900 text-center">No hay clientes cargados.</h1>
      ) : (
        <>
        <h1 className="font-black text-4xl text-blue-900 text-center">Clientes</h1>
                  <p className="mt-3 text-center">Administra tus clientes</p>

                  <table className="w-full mt-5 table-auto shadow bg-white">
                      <thead className="text-white bg-blue-900">
                        <tr>
                          <th className="p-2">Nombre</th>
                          <th className="p-2">Empresa</th>
                          <th className="p-2">Contacto</th>
                          <th className="p-2">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {clientes.map( cliente => (
                          <Cliente
                              key={cliente.id}
                              cliente={cliente}
                              handleEliminar={handleEliminar}
                          />
                        ))}
                      </tbody>
            </table>
        </>
      )
  )
};

export default Inicio;