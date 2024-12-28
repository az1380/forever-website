import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="border-t">
      <div className=" text-2xl text-center my-8">
        <Title text1={"ABOUT"} text2={"US"}></Title>
      </div>
      <div className="flex flex-col md:flex-row gap-14">
        <img src={assets.about_img} className="w-full md:max-w-[450px] "></img>
        <div className="flex flex-col justify-center gap-6 text-gray-600 ">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b>Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      {/* ------------------------Why choose us section------------------------ */}
      <div className="text-xl mt-12">
        <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
      </div>
      <div className="flex flex-col md:flex-row text-sm mt-5">
        <div className="border p-16">
          <b>Quality Assurance:</b>
          <p className="mt-5  text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border p-16">
          <b>Convenience:</b>
          <p className="mt-5  text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border p-16">
          <b>Exceptional Customer Service:</b>
          <p className="mt-5 text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <div>
        <NewsletterBox />
      </div>
    </div>
  );
};

export default About;
