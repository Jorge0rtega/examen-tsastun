import "./App.css";
import { Inicio } from "./pages";
import { PublicRoutes } from "./models/routes";
import { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RouteWithNotFound from "./pages/RouteWithNotFound";
import Header from "./components/header";

function App() {
    return (
        <Suspense fallback={<>Cargando...</>}>
            <BrowserRouter>
                <Header />

                <div className=" w-full lg:w-auto px-4 py-2 container mx-auto">
                    <RouteWithNotFound>
                        <Route path="/" element={<Inicio />} />
                        {/* <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} /> */}
                        <Route path={PublicRoutes.INICIO} element={<Inicio />} />
                    </RouteWithNotFound>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
