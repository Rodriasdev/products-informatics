import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Register } from "../pages/Register";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={<Register/>}
                    path="/"
                />
            </Routes>
        
        </BrowserRouter>
    )
}