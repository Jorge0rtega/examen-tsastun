import { useMediaQuery } from "@react-hook/media-query";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PublicRoutes } from "../models/routes";

const Header = () => {
    const navigate = useNavigate();

    const isMobile = useMediaQuery("(max-width: 1319px)");
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };
    return (
        <>
            {!isMobile ? (
                <div className="w-full sticky top-0 z-50 flex bg-gris justify-center">
                    <nav className="text-black font-light flex items-center justify-center justify-between flex-nowrap py-2  px-6 flex-row">
                        <div className="w-full block flex flex-grow  flex-row ">
                            <Link
                                className="block mt-1 mr-1 text-center inline-block lg:mt-0 rounded-2xl py-1 px-2 hover:bg-gray-400/20 ease-linear duration-300 order-8"
                                to={`${PublicRoutes.INICIO}`}
                            >
                                Inicio
                            </Link>
                            <Link
                                className="block mt-1 mr-1 text-center inline-block lg:mt-0 rounded-2xl py-1 px-2 hover:bg-gray-400/20 ease-linear duration-300 order-8"
                                to={`${PublicRoutes.ALTA}`}
                            >
                                Alta
                            </Link>
                            <Link
                                className="block mt-1 mr-1 text-center inline-block lg:mt-0 rounded-2xl py-1 px-2 hover:bg-gray-400/20 ease-linear duration-300 order-8"
                                to={`${PublicRoutes.BAJA}`}
                            >
                                Baja
                            </Link>
                        </div>
                    </nav>
                </div>
            ) : (
                <div className=" sticky top-0 z-50 flex bg-gris justify-center">
                    <nav className="text-black font-light flex items-center justify-center  flex-wrap py-2  px-6">
                        {isNavVisible ? (
                            <div className="w-full block flex-grow ">
                                <Link
                                    className="block mt-1 mr-1 text-center rounded-2xl py-1 px-2 hover:bg-gray-400/20 ease-linear duration-300"
                                    to={`${PublicRoutes.INICIO}`}
                                >
                                    Incio
                                </Link>
                                <Link
                                    className="block mt-1 mr-1 text-center rounded-2xl py-1 px-2 hover:bg-gray-400/20 ease-linear duration-300"
                                    to={`${PublicRoutes.ALTA}`}
                                >
                                    Alta
                                </Link>
                                <Link
                                    className="block mt-1 mr-1 text-center rounded-2xl py-1 px-2 hover:bg-gray-400/20 ease-linear duration-300"
                                    to={`${PublicRoutes.BAJA}`}
                                >
                                    Baja
                                </Link>
                                <div className="my-5 border-2 outline-white rounded p-1 px-4">
                                    <button onClick={toggleNav}>Cerrar menú</button>
                                </div>
                            </div>
                        ) : (
                            <div className="mx-8 border-2 outline-black rounded p-1 px-3">
                                <button onClick={toggleNav}>Menú</button>
                            </div>
                        )}
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;
