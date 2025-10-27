import React, { useEffect } from 'react';

export default function ProductList() {

    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }

  return (
    <div>
      
    </div>
  )
}
