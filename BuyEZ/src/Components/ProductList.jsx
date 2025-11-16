import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function ProductList() {

  const[products, setProducts] = useState([]);

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


    return(
      <div className='product-list'>
          {products.map((product) => (
            <div className='product-card' key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} className='product-img'></img>
                <h2 className='product-title'>{product.title}</h2>
                <p>{product.price}$</p>
              </Link>
            </div>
          ))}
      </div>
    )
}
