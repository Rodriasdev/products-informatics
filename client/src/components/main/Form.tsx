import React, { ChangeEvent, useState } from "react"
import { UserDto } from "../../types/user.dto"
import Swal from "sweetalert2"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

export const Formulario = () => {
    const {login} = useAuth()
    const [formState,setFormState] = useState<UserDto>({
        email: "",
        password: ""
    })
    const navigate = useNavigate()


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newFormData = {
            ...formState,
            [e.target.name]: e.target.value
        }

        setFormState(newFormData)
        
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        
        e.preventDefault()

        const reponse = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(formState),
            headers: {
                'content-type': 'application/json'
            }
        })

        const data = await reponse.json()



        if (data.errors) {
          return Swal.fire({
            title: 'Error',
            text: data.errors[0].msg,
            icon: 'error',
            width: '50%',
            padding: '1rem',
            background: '#DBCBCB',
            grow: 'row'
          })
        }

          
        login(data.token.token)

        return navigate('/home')

    }

    return(
        <main className="container-fluid bg-light">
            <div className="d-flex justify-content-center mt-5">

            <div className="mt-5">
                <div className="px-4 py-3">
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email</label>
                        <input name="email" onChange={handleChange} value={formState.email} type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormPassword1" className="form-label">Contraseña</label>
                        <input name="password" onChange={handleChange} value={formState.password} type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Contraseña"/>
                    </div>
                    <div className="mb-3">
                    </div>
                    <div className="text-center">
                        <button onClick={handleSubmit} className="btn btn-primary text-center">Iniciar Sesión</button>
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                {/* <a className="dropdown-item" href="#">New around here? Sign up</a>
                <a className="dropdown-item" href="#">Forgot password?</a> */}
            </div>
            </div>
        </main>
    )
}