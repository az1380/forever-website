import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <hr></hr>
      <div className="text-2xl text-center my-10">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-10 mt-8 ">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px] "
        ></img>
        <div className="flex flex-col gap-5 text-gray-500 mt-10">
          <p className="text-xl font-semibold text-gray-600">Our Store</p>
          <div>
            <p>Suite 350, Washington, USA</p>
            <p>54709 Willms Station</p>
          </div>
          <div>
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
          </div>
          <p className="text-xl font-semibold text-gray-600">
            Careers at Forever
          </p>
          <p>Learn more about our teams and job openings.</p>
          <button
            className="border hover:bg-black hover:text-white transition-all duration-500 py-4 px-8 text-sm">
            Explore Jobs
          </button>
        </div>
      </div>
        <NewsletterBox />
    </div>
  );
};

export default Contact;
