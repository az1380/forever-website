import React from "react";

const NewsletterBox = () => {
  return (
    <div className=" text-center flex-col my-10">
      <p className="text-2xl font-medium text-gray-800 ">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400" >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="flex justify-center mt-3 w-full sm:w-1/2 mx-auto">
        <input placeholder="Enter Your Email" className="border p-3 w-1/2 "/>
        <button className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default NewsletterBox;
