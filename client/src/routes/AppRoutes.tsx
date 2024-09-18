import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { PrivateRoute } from "./PrivateRoutes";
import { AddProduct } from "../pages/AddProduct";
import { EditProduct } from "../pages/EditProduct";

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
                <Route
                    path="/form-product"
                    element={
                        <PrivateRoute>
                            <AddProduct/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/form-edit-product/:id"
                    element={
                        <PrivateRoute>
                            <EditProduct/>
                        </PrivateRoute>
                    }
                />
            </Routes>
        
        </BrowserRouter>
    )
}