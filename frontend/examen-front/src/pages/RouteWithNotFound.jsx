import { Route, Routes } from "react-router-dom";
import { Error } from "../components";

const RouteWithNotFound = (props) => {
    return (
        <Routes>
            {props.children}
            <Route path="*" element={<Error />} />
        </Routes>
    );
};
export default RouteWithNotFound;
