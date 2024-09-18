import React, { useState } from 'react';
import { productDto } from '../../types/product.dto';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

export const Products = () => {
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
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Marca</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="brand" 
                        name="brand" 
                        value={newEquipment.brand} 
                        onChange={handleInputChange}  
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="status" className="form-label">Modelo</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="model" 
                        name="model" 
                        value={newEquipment.model} 
                        onChange={handleInputChange}  
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
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="state" className="form-label">Estado</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="state" 
                          name="state" 
                          value={newEquipment.state} 
                          onChange={handleInputChange}  
                        />
                      </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="location" className="form-label">Ubicación</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="location" 
                        name="location" 
                        value={newEquipment.location} 
                        onChange={handleInputChange}  
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Agregar Equipo</button>
                </form>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};
