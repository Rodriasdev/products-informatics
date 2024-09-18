import React from "react"
import { productDto } from "../../types/product.dto"

interface Props {
    productState: Array<productDto>
}

export const ProductList: React.FC<Props> = ({productState}) => {

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
                    {/* {equipments.map(equipment => (
                        <tr key={equipment.id}>
                        <td>{equipment.id}</td>
                        <td>{equipment.name}</td>
                        <td>{equipment.status}</td>
                        <td>{equipment.location}</td>
                        <td>{equipment.acquisitionDate}</td>
                        </tr>
                    ))} */}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    )
}