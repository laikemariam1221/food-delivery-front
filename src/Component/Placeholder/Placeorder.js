import React from "react";
import "../Cart/cart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./placeorder.css";

const Placeholder = () => {
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

  return (
    <div className="place-holder-contaniner">
      <div className="placeorder-div-one">
        <h1>Delivery information</h1>
        <form>
          <div>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input className="Email" type="text" placeholder="Email Adress" />
          <input className="street" type="text" placeholder="street" />
          <div>
            <input type="text" placeholder="city" />
            <input type="text" placeholder="state" />
          </div>
          <div>
            <input type="text" placeholder="zipe code" />
            <input type="text" placeholder="country" />
          </div>
          <input className="phone" type="text" placeholder="phone" />
        </form>
      </div>
      <div className="total-cart-container">
        <div className="sub-total-cart">
          <h1 className="cart-total">cart total</h1>
          <div className="subtotal">
            <p>subtotal</p>
            <p>${getTotalPrice()}</p>
          </div>
          <hr />
          <div className="fee-delivery">
            <p>Delivery fee</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className="total">
            <h2>Total</h2>
            <h2>${getTotalPrice() + 2}</h2>
          </div>
          <Link to="/order">
            <button className="process">PROCESS TO PAYMENT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
