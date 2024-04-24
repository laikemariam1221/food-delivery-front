import React, { useContext, useState } from 'react';
import "./fooditem.css";
import { assets } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../Store/cartSlice.js";
import { CartcolorContext } from "../Storecontext/FoodImageContext";
function FoodItem({ item }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState(false);
  const { iscartcolorupdater  } = useContext(CartcolorContext);
  const handleAddToCart = () => {
    dispatch(addItemToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    }));
    setAddedToCart(true);
    iscartcolorupdater(true)
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return (
    <div className="foodlist-container">
      <div className="foodimage">
        <img src={item.image} alt={item.name} />
        {!addedToCart ? (
          <img
            onClick={handleAddToCart}
            src={assets.add_icon_white}
            className="add-image"
            alt=""
          />
        ) : (
          <div className="add-minus-value">
            <img
              src={assets.remove_icon_red}
              onClick={handleRemoveFromCart}
              alt=""
            />
            <p>{cartItems.find(cartItem => cartItem.id === item.id)?.quantity || 0}</p>
            <img
              src={assets.add_icon_green}
              onClick={handleAddToCart}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="foodlist">
        <div className="foodlist-img-name">
          <h2 className="name">{item.name}</h2>
          <img src={assets.rating_starts} className="foodlist-rating" alt="" />
        </div>
        <p>{item.description}</p>
        <h2 className="price">${item.price}</h2>
      </div>
    </div>
  );
}

export default FoodItem;
