import useAuth from "../../hooks/useAuth"
export const Header = () => {

    const {authState} = useAuth()



    return(
        <header className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                    <a className="navbar-brand" href="#home">FORMOTEX</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {
                    authState.isLogged ?
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#inventory">Inventario</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#maintenance">Mantenimiento</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reports">Informes</a>
                        </li>
                        </ul>
                    </div>
                    :""
                    }
                    </div>
            </nav>
        </header>
    )
}