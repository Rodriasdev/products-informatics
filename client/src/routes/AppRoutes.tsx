import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={<Register/>}
                    path="/"
                />
                <Route
                    element={<Home/>}
                    path="/home"
                />
            </Routes>
        
        </BrowserRouter>
    )
}