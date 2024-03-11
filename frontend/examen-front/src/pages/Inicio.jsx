import React, { useEffect, useState } from "react";
import { PublicRoutes } from "../models/routes";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
    const [articulos, setArticulos] = useState([]);
    const navigate = useNavigate();

    const handleVer = (e) => {
        const clave = e.target.id;
        console.log(clave);
        navigate(`/${PublicRoutes.CONSULTA}/${clave}`, { replace: true });
    };

    useEffect(() => {
        const listaArticulos = localStorage.getItem("articulos");
        if (listaArticulos) {
            setArticulos(JSON.parse(listaArticulos));
        }
    }, []);
    return (
        <div className="w-full max-w-lg container mx-auto mb-32">
            <h1 className="text-2xl pb-5 text-center text-gray-900 mt-4">Artículos</h1>
            <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Clave
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Descripción
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Marca
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Precio
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Cantidad existente
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mostrar
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {articulos.map((articulo, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{articulo.clave}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{articulo.nombre}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{articulo.descripcion}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{articulo.marca}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{articulo.precio}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{articulo.cantidad}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                    className={`  bg-blue-600 hover:bg-blue-400 transition duration-300   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                                    id={articulo.clave}
                                    type="button"
                                    name="alta"
                                    onClick={handleVer}
                                >
                                    Mostrar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Inicio;
