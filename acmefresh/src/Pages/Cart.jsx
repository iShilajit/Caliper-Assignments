import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";

import { useNavigate } from "react-router-dom";
import { removeItemFromCart } from "../Redux/Cart/action";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const total = useSelector((store) => store.cart.cartTotal);
  const navigate = useNavigate();

  return (
    <div className="cartWrapper">
    
      <button
        id="check"
        onClick={() => {
          navigate("/checkOut");
        }}
      >
        Proceed to Check-out
      </button>

      {cartItems.map((item) => (
        <div className="cartCard">
          <div id="imgDiv">
            <img src={item.img} />
          </div>
          <div className="info">
            <h3>{item.title}</h3>
            <h4>₹{item.price}</h4>
            <button
              onClick={() => {
                dispatch(removeItemFromCart(item));
              }}
            >
              Remove from cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
