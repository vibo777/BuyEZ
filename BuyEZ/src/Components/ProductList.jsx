import React, { useState , useEffect } from 'react';
import {addItem} from '../Redux_Components/cartSlice';
import { useDispatch } from 'react-redux';

export default function ProductList() {

  const[products, setProducts] = useState([]);
  const dispatch = useDispatch();

   useEffect(() => {
        fetch('https://api.pujakaitem.com/api/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    const handleAddItem = (product) => {
      // Dispatch an action
      dispatch(addItem(product));
    };


    return(
      <div className='product-list'>
          {products.map((product) => (
            <div className='product-card' key={product.id}>
              <img src={product.image} className='product-img'></img>
              <h2>{product.name}</h2>
              <p>Price : {product.price}$</p>
              <p>Category : {product.category}</p>
              <button onClick={() => handleAddItem(product)} className='add-cart-btn'>Add +</button>
            </div>
          ))}
      </div>
    )
}
