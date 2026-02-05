import React ,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function TopSellingProducts() {

  const [products,setProducts] = useState([]);

  useEffect(()=> {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data)=>{
         
        {/* Filter Products based on ratings */}
        const topSellingProducts = data.filter(item => item.rating.rate >= 4.5);
        console.log(topSellingProducts);
        setProducts(topSellingProducts);
    })
    .catch((err)=>{
        console.log("Error in fetching data from API !!!")
  });
},[])

  return (
    <div className="top-selling-products" style={{padding: '20px'}}>
      <h1>Top Selling Products</h1>
      <p>Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas.</p>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {products.map((product) => (
          <div key={product.id} className='top-prod-container'>
            <Link to={`/product/${product.id}`}>
              <img className='top-product-img' src={product.image} alt={product.title}/>
              <h3 style={{marginTop:'30px',fontWeight:'bold' , fontSize:'16px',lineHeight:'1.6'}}>{product.title}</h3>
              <p style={{fontWeight:'bold',color:'#6b7e92'}}>${product.price}</p>
              <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link to="/shop" style={{textDecoration:'none'}}>
          <button className='about-us-button'>See All Products</button>
        </Link>
      </div>


    </div>
  );
}