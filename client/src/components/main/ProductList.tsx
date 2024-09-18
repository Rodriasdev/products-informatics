import React from "react"
import { productDto } from "../../types/product.dto"
import useAuth from "../../hooks/useAuth"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
interface Props {
    productState: Array<productDto>;
    setReloadList: React.Dispatch<React.SetStateAction<boolean>>;
    reloadList: boolean;
}



export const ProductList: React.FC<Props> = ({productState, setReloadList, reloadList}) => {
    const {authState} = useAuth()
    const navigate = useNavigate()
    const deletedProduct = async (id: string) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/product/${id}`, {
            method:'DELETE',
            headers: {
                authorization: authState.token!
            }
        })
        if(response.status == 200){
                setReloadList(!reloadList)
                return Swal.fire({
                  title: 'Producto eliminado',
                  icon: 'success',
                  width: '50%',
                  padding: '1rem',
                  background: '#DBCBCB',
                  grow: 'row'
                })

        }
        
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
                        <th>Marca</th>
                        <th>Modelo</th>
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
                        <td>{product.brand}</td>
                        <td>{product.model}</td>
                        <td>{product.state}</td>
                        <td>{product.location}</td>
                        <td>{product.acquisition_date}</td>
                        <td>
                        <svg onClick={()=>deletedProduct(product.id!)} role="button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-archive-fill" viewBox="0 0 16 16">
                            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z"/>
                        </svg>
                        </td>
                        <td>
                        <svg onClick={() => navigate(`/form-edit-product/${product.id!}`)} role="button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
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