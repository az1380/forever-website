import React from "react";

const Newsletter = () => {


// stop the page from reloading when submit a form
const onSubmitHandler = (event)=>{

event.preventDefault()
}


  return (
    <div className=" flex flex-col text-center gap-2">
      <p className="font-medium text-2xl text-gray-800 ">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <form className="w-full sm:w-1/2 border mx-auto flex items-center pl-3 my-6 gap-3">
        <input className="flex-1 w-full outline-none " type="email" placeholder="Enter Your Email" required></input>
        <button type="submit" className="bg-black text-white text-xs py-4 px-10">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default Newsletter;
