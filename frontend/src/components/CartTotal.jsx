import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";


const CartTotal = () => {
  const { currency, total, subtotal, delivery_fee } = useContext(ShopContext);
  return (
    <div className="w-full sm:w-[450px]">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>subtotal</p>
          <p>
            {currency}
            {subtotal.toFixed(2)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>shipping fee</p>
          <p>
            {currency}
            {delivery_fee.toFixed(2)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <p className="font-bold">
            {currency}
            {total.toFixed(2)}
          </p>
        </div>
      </div>

    </div>
  );
};

export default CartTotal;
