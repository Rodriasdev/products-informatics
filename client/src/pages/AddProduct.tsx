import { Header } from "../components/header/header"
import { FormProduct } from "../components/main/FormProduct"


export const AddProduct = () => {
    return (
        <>
            <Header/>
            <FormProduct  request={"POST"}/>
        </>
    )
}