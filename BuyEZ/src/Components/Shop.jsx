import React from 'react'
import ProductList from './ProductList'
import { motion } from "framer-motion"

export default function Shop() {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="text-center p-4"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Shop Page.</h1>
      <ProductList />
    </motion.div>
  )
}
