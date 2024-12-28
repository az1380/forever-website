import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ name, price, id, image }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/products/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out "
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-1 pb-3 text-sm">{name}</p>
      <p className="pt-1 pb-3 text-sm">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
