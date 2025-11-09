import React from 'react';
import ProductList from './ProductList';
import Banner from './Banner';
import { motion } from "framer-motion";

export default function Shop(props) {
  return (
    <>
      <Banner/>
      <div className='banner-title'>
        <h1>{props.name}</h1>
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-center p-4"
      > 
        <ProductList />
      </motion.div>
    </>
    
  )
}
