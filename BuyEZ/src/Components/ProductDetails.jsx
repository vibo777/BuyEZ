import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addItem } from "../Redux_Components/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const dispatch = useDispatch(); 
  const handleAddItem = () => {
    dispatch(addItem(product));
  }

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  if (error) return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;

  return (
    <div className="product-details" style={styles.container}>
      <div style={styles.imageBox}>
        <img src={product.image} alt={product.title} style={styles.image} />
      </div>

      <div className="" style={styles.detailsBox}>
        <h1 style={styles.title}>{product.title}</h1>
        <p style={styles.category}>Category: {product.category}</p>

        <h2 style={styles.price}>${product.price}</h2>

        <p style={styles.description}>{product.description}</p>

        <button onClick={handleAddItem} style={styles.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "40px",
    maxWidth: "1200px",
    margin: "auto",
    alignItems: "center",
  },
  imageBox: { flex: 1 },
  image: {
    width: "100%",
    maxHeight: "500px",
    objectFit: "contain",
    borderRadius: "10px",
  },
  detailsBox: { flex: 1,textAlign:"left" },
  title: { fontSize: "28px", fontWeight: "bold" },
  category: { color: "#555" },
  price: { color: "#2a9d8f", fontSize: "26px", margin: "20px 0" },
  description: { fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" },
  button: {
    padding: "12px 20px",
    fontSize: "18px",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "0px",
    cursor: "pointer",
  },
};
