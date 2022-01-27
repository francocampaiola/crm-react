import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import React from 'react';
import Alerta from './Alerta'

const Formulario = () => {

    const nuevoClienteSchema = Yup.object().shape( {
        nombre: Yup.string()
                .min(3, "El nombre es muy corto.")
                .max(20, "El nombre es muy largo.")
                .required('El nombre del cliente es obligatorio.'),
        empresa: Yup.string()
                .required("El nombre de la Empresa es obligatorio."),
        email: Yup.string()
                .required("El correo electrónico es obligatorio.")
                .email("El correo electrónico debe tener un formato válido."),
        telefono: Yup.number()
                    .integer("El número no es válido.")
                    .positive("El número no es válido.")
                    .typeError("El número no es válido."),
        notas: ''
    })

    const handleSubmit = (values) => {
        console.log(values);
    }

  return (
      <div className='bg-white mt-10 p-2 rounded-md shadow-md md:w-3/4 mx-auto'>
          <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
              Agregar Cliente
          </h1>

          <Formik
            initialValues={{
                nombre: '',
                empresa: '',
                email: '',
                telefono: '',
                notas: ''
            }}
            onSubmit={ (initialValues) => {
                handleSubmit(initialValues);
            }}
            validationSchema={nuevoClienteSchema}
          >
              { ({errors, touched}) => {

                  return ( 
              <Form
                className='mt-10'
              >
                  <div className="mb-4">
                      <label
                        className="text-gray-800"
                        htmlFor="nombre"
                      >
                          Nombre: 
                      </label>
                      <Field
                            id="nombre"
                            type="text"
                            placeholder="Nombre del cliente"
                            className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
                            name="nombre"
                      />

                    {errors.nombre && touched.nombre ? (
                          <Alerta>{errors.nombre}</Alerta>
                      ) : null} 

                  </div>
                  <div className="mb-4">
                      <label
                        className="text-gray-800"
                        htmlFor='empresa'
                      >
                          Empresa: 
                      </label>
                      <Field
                            id="empresa"
                            type="text"
                            placeholder="Empresa del cliente"
                            className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
                            name="empresa"
                      />
                      {errors.empresa && touched.empresa ? (
                          <Alerta>{errors.empresa}</Alerta>
                      ) : null} 
                  </div>
                  <div className="mb-4">
                      <label
                        className="text-gray-800"
                        htmlFor='email'
                      >
                          Email: 
                      </label>
                      <Field
                            id="email"
                            type="text"
                            placeholder="Email del cliente"
                            className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
                            name="email"
                      />
                      {errors.email && touched.email ? (
                          <Alerta>{errors.email}</Alerta>
                      ) : null} 
                  </div>
                  <div className="mb-4">
                      <label
                        className="text-gray-800"
                        htmlFor='telefono'
                      >
                          Teléfono: 
                      </label>
                      <Field
                            id="telefono"
                            type="tel"
                            placeholder="Teléfono del cliente"
                            className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
                            name="telefono"
                      />
                      {errors.telefono && touched.telefono ? (
                          <Alerta>{errors.telefono}</Alerta>
                      ) : null} 
                  </div>
                  <div className="mb-4">
                      <label
                        className="text-gray-800"
                        htmlFor='notas'
                      >
                          Notas: 
                      </label>
                      <Field
                            as="textarea"
                            id="notas"
                            type="text"
                            placeholder="Notas del cliente"
                            className="mt-2 block w-full p-3 bg-gray-50 rounded-md h-40"
                            name="notas"
                      />
                  </div>
                  <input
                        type="submit"
                        value="Agregar cliente"
                        className='mt-5 w-full bg-blue-800 p-3 uppercase text-white font-bold cursor-pointer hover:bg-blue-700 transition-all'
                    />
              </Form>)}}
          </Formik>
      </div>
  );
};

export default Formulario;
