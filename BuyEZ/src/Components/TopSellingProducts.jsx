import React ,{useState,useEffect} from 'react';

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
    <div>
      <h1>Top Selling Products</h1>

  


    </div>
  );
}