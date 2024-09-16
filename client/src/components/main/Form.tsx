import React, { ChangeEvent, HtmlHTMLAttributes, InputHTMLAttributes, useState } from "react"
import { UserDto } from "../../types/user.dto"

export const Formulario = () => {
    const [formState,setFormState] = useState<UserDto>({
        email: "",
        username: "",
        password: ""
    })


    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setFormState()
    // }

    return(
        <main className="container-fluid bg-light">
            <div className="d-flex justify-content-center mt-5">

            <div className="mt-5">
                <form className="px-4 py-3">
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Contraseña"/>
                    </div>
                    <div className="mb-3">
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary text-center">Iniciar Sesión</button>
                    </div>
                </form>
                <div className="dropdown-divider"></div>
                {/* <a className="dropdown-item" href="#">New around here? Sign up</a>
                <a className="dropdown-item" href="#">Forgot password?</a> */}
            </div>
            </div>
        </main>
    )
}