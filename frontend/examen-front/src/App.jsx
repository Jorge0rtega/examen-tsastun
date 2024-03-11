import "./App.css";
import { Alta, Baja, Consulta, Inicio } from "./pages";
import { PublicRoutes } from "./models/routes";
import { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RouteWithNotFound from "./pages/RouteWithNotFound";
import { Header } from "./components";

function App() {
    return (
        <Suspense fallback={<>Cargando...</>}>
            <BrowserRouter>
                <Header />

                <div className=" w-full lg:w-auto px-4 py-2 container mx-auto">
                    <RouteWithNotFound>
                        <Route path="/" element={<Inicio />} />
                        <Route path={PublicRoutes.INICIO} element={<Inicio />} />
                        <Route path={PublicRoutes.BAJA} element={<Baja />} />
                        <Route path={PublicRoutes.ALTA} element={<Alta />} />
                        <Route path={`${PublicRoutes.CONSULTA}/:clave`} element={<Consulta />} />
                    </RouteWithNotFound>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
