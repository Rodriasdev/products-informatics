import { useState, useEffect } from 'react';
import { productDto } from '../../types/product.dto';

import { ProductList } from './ProductList';
import { useNavigate } from 'react-router-dom';

export const Products = () => {

  const navigate = useNavigate()
  const [productState, setProductState] = useState<Array<productDto>>([])

  const [reloadList, setReloadList] = useState<boolean>(true)


  useEffect(() => {
    (
      async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/product`)
        const data = await response.json()
        setProductState(data)
      }
    )()
  },[reloadList])

  return (
    <div className="bg-light min-vh-100">
      <div className="container mt-4">
        <div className="row">
          <div className='text-end'>
            <button className='btn btn-primary' onClick={() => navigate('/form-product')}>Nuevo Producto</button>
          </div>
        </div>

        <ProductList reloadList={reloadList} setReloadList={setReloadList}  productState={productState}/>

      </div>
    </div>
  );
};
