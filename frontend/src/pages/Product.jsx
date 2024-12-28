import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, cartCount } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    const item = products.find((item) => productId === item._id);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2  pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/* -------------------Product Data------------------------- */}
      <div className="flex gap-12 flex-col sm:flex-row ">
        {/* --------------------Product Images----------------------- */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              ></img>
            ))}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img className="w-full h-auto" src={image} alt=""></img>
          </div>
        </div>
        {/* -----------------------Product Info----------------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex mt-2 items-center gap-1">
            <img src={assets.star_icon} alt="" className="w-3.5"></img>
            <img src={assets.star_icon} alt="" className="w-3.5"></img>
            <img src={assets.star_icon} alt="" className="w-3.5"></img>
            <img src={assets.star_icon} alt="" className="w-3.5"></img>
            <img src={assets.star_dull_icon} alt="" className="w-3.5"></img>
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <p className="mt-5">Select Size</p>
          <div className="mt-4">
            {productData.sizes.map((item, index) => (
              <button
                onClick={() => setSize(item)}
                key={index}
                className={`border bg-gray-100 py-2 px-4 mr-3 ${
                  item === size ? "border-orange-500" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              addToCart(productData._id, size);
              cartCount;
            }}
            className="bg-black text-white py-3 px-8 text-sm mt-5 active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="my-8 sm:w-[80%]"></hr>
          <p className="text-gray-500 text-sm">
            100% Original product.
            <br />
            Cash on delivery is available on this product.
            <br />
            Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>
      <div className="flex mt-20 ">
        <p className="border px-5 py-3 text-sm font-bold">Description</p>
        <p className="border px-5 py-3 text-sm">Reviews(122)</p>
      </div>
      <div className=" border p-6 text-sm text-gray-500">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p className="mt-5">
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
