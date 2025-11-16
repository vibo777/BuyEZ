import React from 'react'
import Banner from './Banner';
import {useSelector , useDispatch} from "react-redux";
import { resetItem,removeItem } from '../Redux_Components/cartSlice';
import { Link } from 'react-router-dom';
 
export default function Cart(props) {

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // to remove single product from cart 
  const handleRemoveItem = () => {
    dispatch(removeItem());
  } 

  const handleClearCart = () => {
    dispatch(resetItem());
  }



  return (
    <div>
      <Banner/>
      <div className='banner-title'>
        <h1>{props.name}</h1>
      </div>
      {cartItems.length == 0 && (
        <>
            <h1 className='mt-5'>Your cart is empty</h1>
            <Link to="/shop">
                <button className="shop-btn">Continue Shopping</button>
            </Link>
        </>
        )}
        <div className="cart-list">
           {cartItems.map((cartItem) => (
            <div className='product-card' key={cartItem.id}>
              <img src={cartItem.image} className='product-img'></img>
              <h4>{cartItem.name}</h4>
              <p>{cartItem.price}$</p>
              <button onClick={handleRemoveItem} className='add-cart-btn'>Remove</button>
            </div>
          ))}
        </div>
        <div className="container">
           <button className='cc-btn' onClick={handleClearCart}>clear cart</button>  
        </div>
    </div>
  )
}
