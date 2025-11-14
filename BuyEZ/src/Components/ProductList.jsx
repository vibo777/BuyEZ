import React, { useState , useEffect } from 'react';
import {addItem} from '../Redux_Components/cartSlice';
import {removeItem} from '../Redux_Components/cartSlice';
import { useDispatch } from 'react-redux';

export default function ProductList() {

  const[products, setProducts] = useState([]);
  const dispatch = useDispatch();

   useEffect(() => {
        fetch('https://fakestoreapi.com/products')
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

    const handleRemoveItem = (product) => {
      dispatch(removeItem(product));
    };

    return(
      <div className='product-list'>
          {products.map((product) => (
            <div className='product-card' key={product.id}>
              <img src={product.image} className='product-img'></img>
              <h4>{product.title}</h4>
              <p>{product.price}$</p>
              <button onClick={() => handleAddItem(product)} className='add-cart-btn'>Add +</button>
              <button onClick={() => handleRemoveItem(product)} className='remove-cart-btn'>Remove - </button>
            </div>
          ))}
      </div>
    )
}
