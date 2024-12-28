import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);

    toast.success("Item Added to Cart Successfuly");

  };

  const updateCartQuantity = (itemId, size, quantity) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (quantity <= 0) {
        delete newCart[itemId][size];
        if (Object.keys(newCart[itemId]).length === 0) {
          delete newCart[itemId];
        }
        toast.info("Item removed from cart.");
      } else {
        newCart[itemId][size] = quantity;
      }
      setCartCount(quantity);
      return newCart;
    });
  };
  // Calculate subtotal and cart count
  const calculateCartSummary = () => {
    let newSubtotal = 0;
    let totalCount = 0;

    for (let itemId in cartItems) {
      for (let size in cartItems[itemId]) {
        const product = products.find((p) => p._id === itemId);
        const quantity = cartItems[itemId][size];

        if (product) {
          newSubtotal += product.price * quantity;
          totalCount += quantity;
        }
      }
    }

    setSubtotal(newSubtotal);
    setCartCount(totalCount);
  };

  // Recalculate subtotal and count whenever cartItems changes
  useEffect(() => {
    calculateCartSummary();
  }, [cartItems]);

  // Calculate total (subtotal + delivery fee)
  const total = subtotal + delivery_fee;

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    cartItems,
    addToCart,
    cartCount,
    updateCartQuantity,
    total,
    subtotal,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
