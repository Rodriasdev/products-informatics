import { Formulario } from "../components/main/Form"
import { Header } from "../components/header/header"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const Register = () => {
    const navigate = useNavigate()
    const {authState} = useAuth()

   

    useEffect(() => {
        if(authState.isLogged) return navigate('/home')
    },[])

    return (
        <>
            <Header/>
            <Formulario/>
        </>
    )
}