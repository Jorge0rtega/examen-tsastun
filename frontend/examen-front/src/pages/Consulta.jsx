import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Consulta = () => {
    const { clave } = useParams();
    console.log(clave);

    const [articulo, setArticulo] = useState(null);

    useEffect(() => {
        const storedArticulos = localStorage.getItem("articulos");
        if (storedArticulos) {
            const listaArticulos = JSON.parse(storedArticulos);
            const articuloEncontrado = listaArticulos.find((item) => item.clave === clave);
            setArticulo(articuloEncontrado);
        }
    }, [clave]);

    if (!articulo) {
        return <div>No se encontró el artículo con la clave proporcionada.</div>;
    }

    return (
        <div className="w-full max-w-lg container mx-auto mb-32">
            <h1 className="text-2xl pb-5 text-center text-gray-900 mt-4">Detalles del artículo</h1>
            <div className="border-t border-gray-200">
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Clave</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{articulo.clave}</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Nombre</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{articulo.nombre}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Descripción</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{articulo.descripcion}</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Marca</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{articulo.marca}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Precio</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{articulo.precio}</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Cantidad</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{articulo.cantidad}</dd>
                </div>
            </div>
        </div>
    );
};

export default Consulta;
