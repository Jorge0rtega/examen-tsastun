import React, { useEffect, useState } from "react";

const Alta = () => {
    const [articulo, setArticulo] = useState({
        clave: "",
        nombre: "",
        descripcion: "",
        marca: "",
        precio: "",
        cantidad: "",
    });

    const handleArticulo = ({ target: { value, id } }) => {
        setArticulo({ ...articulo, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(articulo);
        const articulosGuardados = JSON.parse(localStorage.getItem("articulos")) || [];
        const nuevaLista = [...articulosGuardados, articulo];
        localStorage.setItem("articulos", JSON.stringify(nuevaLista));
        console.log(nuevaLista);
        setArticulo({
            clave: "",
            nombre: "",
            descripcion: "",
            marca: "",
            precio: "",
            cantidad: "",
        });
    };

    useEffect(() => {
        const storedArticulos = localStorage.getItem("articulos");
        if (storedArticulos) {
            // Parsea la lista de artículos JSON y actualiza el estado
            setArticulo(JSON.parse(storedArticulos));
        }
    }, []);

    return (
        <div className="w-full max-w-lg container mx-auto mb-32">
            <h1 className="text-2xl pb-5 text-center text-gray-900 mt-4">Alta</h1>
            <div className={"bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4 mt-4"}>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                    Clave:
                </label>

                <input
                    type="text"
                    id="clave"
                    name="calve"
                    placeholder="Clave"
                    className={`shadow appearance-none border-2 rounded w-full py-2 px-3 text-azul1 leading-tight focus:outline-teal-600 focus:shadow-teal-600`}
                    value={articulo.clave}
                    onChange={handleArticulo}
                    onBlur={handleArticulo}
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                    Nombre:
                </label>

                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    className={`shadow appearance-none border-2 rounded w-full py-2 px-3 text-azul1 leading-tight focus:outline-teal-600 focus:shadow-teal-600`}
                    value={articulo.nombre}
                    onChange={handleArticulo}
                    onBlur={handleArticulo}
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                    Descripcion:
                </label>

                <input
                    type="text"
                    id="descripcion"
                    name="descripcion"
                    placeholder="descripcion"
                    className={`shadow appearance-none border-2 rounded w-full py-2 px-3 text-azul1 leading-tight focus:outline-teal-600 focus:shadow-teal-600`}
                    value={articulo.descripcion}
                    onChange={handleArticulo}
                    onBlur={handleArticulo}
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                    Marca:
                </label>

                <input
                    type="text"
                    id="marca"
                    name="marca"
                    placeholder="marca"
                    className={`shadow appearance-none border-2 rounded w-full py-2 px-3 text-azul1 leading-tight focus:outline-teal-600 focus:shadow-teal-600`}
                    value={articulo.marca}
                    onChange={handleArticulo}
                    onBlur={handleArticulo}
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                    Precio:
                </label>

                <input
                    type="text"
                    id="precio"
                    name="precio"
                    placeholder="precio"
                    className={`shadow appearance-none border-2 rounded w-full py-2 px-3 text-azul1 leading-tight focus:outline-teal-600 focus:shadow-teal-600`}
                    value={articulo.precio}
                    onChange={handleArticulo}
                    onBlur={handleArticulo}
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                    Cantidad existente:
                </label>

                <input
                    type="text"
                    id="cantidad"
                    name="cantidad"
                    placeholder="cantidad"
                    className={`shadow appearance-none border-2 rounded w-full py-2 px-3 text-azul1 leading-tight focus:outline-teal-600 focus:shadow-teal-600`}
                    value={articulo.cantidad}
                    onChange={handleArticulo}
                    onBlur={handleArticulo}
                />
                <div className=" flex flex-row-reverse justify-between pt-5">
                    <button
                        className={`  bg-blue-600 hover:bg-blue-400 transition duration-300   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                        type="button"
                        name="alta"
                        onClick={handleSubmit}
                    >
                        Alta
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alta;
