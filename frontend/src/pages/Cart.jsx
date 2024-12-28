import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import {  useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems, updateCartQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = [];
    for (let i in cartItems) {
      for (let j in cartItems[i]) {
        // Accessing cart items and processing
        const product = products.find((p) => p._id === i);
        const size = j;
        const quantity = cartItems[i][j];

        if (product) {
          data.push({
            ...product,
            size,
            quantity,
          });
        }
      }
    }
    setCartData(data);
  }, [cartItems, products]); // Add dependencies to useEffect

  return cartData.length > 0 ? (
    <div className="border-t pt-14">
      <div className="text-2xl">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      {cartData.map((item, index) => (
        <div
          key={index}
          className="flex gap-6 justify-between items-center border-t border-b p-4"
        >
          <div className="flex">
            <img src={item.image} alt={item.name} className="w-16 sm:w-20" />
            <div className="ml-4 flex-col items-center ">
              <p>{item.name}</p>
              <div className="flex gap-4  items-center">
                <p>
                  {currency}
                  {item.price * item.quantity}
                </p>
                <p className="border sm:py-1 px-2 sm:px-3 bg-slate-50">
                  {item.size}
                </p>
              </div>
            </div>
          </div>

          <input
            onChange={(e) => {
              e.target.value === "" || e.target.value === "0"
                ? null
                : updateCartQuantity(
                    item._id,
                    item.size,
                    Number(e.target.value)
                  );
            }}
            className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 "
            type="number"
            min={1}
            defaultValue={item.quantity}
          ></input>
          <img
            onClick={() => {
              updateCartQuantity(item._id, item.size, 0);
            }}
            src={assets.bin_icon}
            className="w-4 mr-4 sm:w-5 cursor-pointer"
          ></img>
        </div>
      ))}
      <div className="flex justify-end mt-12 ">
        <CartTotal btnText={"PROCEED TO CHECKOUT"} />
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={() => navigate("/place-order")}
          className="bg-black text-white px-6 py-3 text-sm "
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center text-center py-4 text-xl border-y ">
      <p>Your Cart is Empty!</p>
    </div>
  );
};

export default Cart;
