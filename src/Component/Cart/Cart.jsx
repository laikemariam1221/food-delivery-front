import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../Store/cartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalPrice = (price, quantity) => {
    return price * quantity;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((cartItem) => {
      totalPrice += calculateTotalPrice(cartItem.price, cartItem.quantity);
    });
    return totalPrice;
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  return (
    <div>
      <div className="cart_container">
        <table>
          <thead>
            <tr className="topic">
              <th>Items</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>
                  <img src={cartItem.image} alt={cartItem.name} />
                </td>
                <td>{cartItem.name}</td>
                <td>${cartItem.price}</td>
                <td>{cartItem.quantity}</td>
                <td>${calculateTotalPrice(cartItem.price, cartItem.quantity)}</td>
                <td>
                  <button className="fooddeplay-button" onClick={() => handleRemoveFromCart(cartItem.id)}>x</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="total-cart-container"> 
        <div className="sub-total-cart"> 
          <h1 className="cart-total">cart total</h1> 
          <div className="subtotal"> 
            <p>subtotal</p> 
            <p>${getTotalPrice()}</p> 
          </div> 
          <hr/> 
          <div className="fee-delivery"> 
            <p>Delivery fee</p> 
            <p>${2}</p> 
          </div> 
          <hr/> 
          <div className="total"> 
            <h2>Total</h2> 
            <h2>${getTotalPrice() + 2}</h2> 
          </div> 
          <Link to="/order">
          <button className="process">PROCESS TO CHECKOUT</button> 
          </Link>
        </div> 
        <div className="postal-code-container"> 
          <p>if you have a postal code. Enter it there</p> 
          <div> 
            <input type="text"  placeholder="postal code"/> 
            <button>submit</button> 
          </div> 
        </div> 
      </div>
    </div>
  );
};

export default Cart;
