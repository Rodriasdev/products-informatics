import React from "react"
import { productDto } from "../../types/product.dto"
import useAuth from "../../hooks/useAuth"

interface Props {
    productState: Array<productDto>
}



export const ProductList: React.FC<Props> = ({productState}) => {
    const {authState} = useAuth()

    const deletedProduct = (id: string) => {
        const reponse = fetch(`${import.meta.env.VITE_API_UR}/product/${id}`, {
            method:'DELETE',
            headers: {
                authorization: authState.token!
            }
        })
        
    }

    return(
        <div className="row mt-4">
            <div className="col">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Inventario de Equipos</h5>
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Ubicación</th>
                        <th>Fecha de Adquisición</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productState.map(product => (
                        <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.state}</td>
                        <td>{product.location}</td>
                        <td>{product.acquisition_date}</td>
                        <td>
                        <svg onClick={() => deletedProduct(product.id!)} role="button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-archive-fill" viewBox="0 0 16 16">
                        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z"/>
                        </svg>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    )
}