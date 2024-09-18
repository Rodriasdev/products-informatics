import React, { useState } from 'react';
import { productDto } from '../../types/product.dto';
import useAuth from '../../hooks/useAuth';

export const Products = () => {
  // const [equipments, setEquipments] = useState<productDto[]>([
  //   { id: 1, name: 'Laptop Dell XPS', status: 'Activo', location: 'Oficina A', acquisitionDate: '2023-01-15' },
  //   { id: 2, name: 'Impresora HP LaserJet', status: 'En mantenimiento', location: 'Almacén', acquisitionDate: '2022-11-30' },
  // ]);
  const {authState} = useAuth()

  const [newEquipment, setNewEquipment] = useState<Omit<productDto, 'id'>>({
    name: '',
    state: '',
    location: '',
    acquisition_date: '',
    brand: '',
    model: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEquipment(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch(`${import.meta.env.VITE_API_URL}/product`,{
      method:'POST',
      body: JSON.stringify(newEquipment),
      headers:{
        'content-type': 'application/json',
        authorization: authState.token!
      }
    })

    const data = await response.json()

    console.log(data);
    

  };

  return (
    <div className="bg-light min-vh-100">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resumen de Inventario</h5>
                <p className="card-text">
                  {/* Total de equipos: {equipments.length}<br />
                  Equipos activos: {equipments.filter(e => e.status === 'Activo').length}<br />
                  En mantenimiento: {equipments.filter(e => e.status === 'En mantenimiento').length} */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Agregar Nuevo Equipo</h5>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Nombre del Equipo</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={newEquipment.name} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="state" className="form-label">Estado</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="state" 
                        name="state" 
                        value={newEquipment.state} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Marca</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="brand" 
                        name="brand" 
                        value={newEquipment.brand} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="status" className="form-label">Modelo</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="model" 
                        name="model" 
                        value={newEquipment.model} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="location" className="form-label">Ubicación</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="location" 
                        name="location" 
                        value={newEquipment.location} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="acquisitionDate" className="form-label">Fecha de Adquisición</label>
                      <input 
                        type="date" 
                        className="form-control" 
                        id="acquisition_date" 
                        name="acquisition_date" 
                        value={newEquipment.acquisition_date} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Agregar Equipo</button>
                </form>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
};
