import React from 'react'
import {useSelector , useDispatch} from "react-redux";
import { resetItem } from '../Redux_Components/cartSlice';
import { Link } from 'react-router-dom';
 
export default function Cart() {

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(resetItem());
  }

  return (
    <div>
      <button onClick={handleClearCart}>clear cart</button>
      {cartItems.length == 0 && (
        <>
            <h1>Your cart is empty</h1>
            <Link to="/shop">
                <button className="shop-btn">Continue Shopping</button>
            </Link>
        </>
        )}
        <div className="cart-list">
           {cartItems.map((cartItem) => (
            <div className='product-card' key={cartItem.id}>
              <img src={cartItem.image} className='product-img'></img>
              <h4>{cartItem.title}</h4>
              <p>{cartItem.price}$</p>
              <button onClick={() => handleRemoveItem(product)} className='remove-cart-btn'>Remove - </button>
            </div>
          ))}
        </div>
    </div>
  )
}
