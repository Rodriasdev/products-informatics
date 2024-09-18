import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { PrivateRoute } from "./PrivateRoutes";



export const AppRoutes = () => {

    
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={<Register/>}
                    path="/"
                />
                <Route
                    element={
                    <PrivateRoute>
                        <Home/>
                    </PrivateRoute>
                }
                    path="/home"
                />
            </Routes>
        
        </BrowserRouter>
    )
}