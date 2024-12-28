import React, { useState } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [useMethod, setUseMethod] = useState("");
  const navigate = useNavigate()
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* -----------------Left Side---------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3  ">
          <Input type={"text"} placeholder={"First name"} />
          <Input type={"text"} placeholder={"Last name"} />
        </div>
        <Input type={"email"} placeholder={"Email Address"} />
        <Input type={"text"} placeholder={"Last name"} />
        <Input type={"text"} placeholder={"Street"} />
        <div className="flex gap-3  ">
          <Input type={"text"} placeholder={"City"} />
          <Input type={"text"} placeholder={"State"} />
        </div>
        <div className="flex gap-3  ">
          <Input type={"number"} placeholder={"Zipcode"} />
          <Input type={"text"} placeholder={"Country"} />
        </div>
        <Input type={"number"} placeholder={"Phone"} />
      </div>
      {/* ----------------Right Side--------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col lg:flex-row gap-3">
            <div
              onClick={() => setUseMethod("stripe")}
              className="flex items-center border py-2 px-5 gap-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border ${
                  useMethod === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo}></img>
            </div>
            <div
              onClick={() => setUseMethod("razorpay")}
              className="flex items-center border py-2 px-5 gap-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border ${
                  useMethod === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo}></img>
            </div>
            <div
              onClick={() => setUseMethod("cod")}
              className="flex items-center border py-2 px-5 gap-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border ${
                  useMethod === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="h-5 mx-4 text-gray-500 text-sm font-medium">
                {" "}
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <button onClick={()=>{navigate('/orders')}}className="bg-black text-white py-3 px-14 mt-8 text-sm">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
