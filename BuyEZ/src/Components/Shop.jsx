import React from 'react'
import ProductList from './ProductList';
import {motion} from "framer-motion";

export default function Shop() {
  return (
    <motion.h4
      initial={{ y:200, opacity: 0 }}
      animate= {{ y:0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="text-4xl font-bold"
    >
      <h1>Welcome to Shop Page.</h1>
      <ProductList/>
    </motion.h4>
  )
}
