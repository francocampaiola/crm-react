import { useEffect, useState } from "react";
import Cliente from "../components/Cliente";

const Inicio = () => {

  const [clientes, setClientes] = useState([])

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = 'http://localhost:4000/clientes'
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
    }

    obtenerClienteAPI();
  }, []);
  

  return (
    <div>
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
                />
              ))}
            </tbody>
        </table>
    </div> 
  );
};

export default Inicio;