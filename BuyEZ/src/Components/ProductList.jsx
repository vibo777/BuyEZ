import React, { useState , useEffect } from 'react';

export default function ProductList() {

    const[products, setProducts] = useState([]);

   useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProducts(data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    return(
      <div className='product-list'>
          {products.map(product => (
            <div className='product-card' key={product.id}>
              <img src={product.image} className='product-img'></img>
              <h4>{product.title}</h4>
              <p>{product.price}$</p>
            </div>
          ))}
      </div>
    )
}
