import { useParams } from "react-router-dom";
import { Header } from "../components/header/header";
import { FormProduct } from "../components/main/FormProduct";

export const EditProduct = () => {
    const {id} = useParams()


    return (
        <>
            <Header/>
            <FormProduct id={id} request="PUT"/>
        </>
    )
}