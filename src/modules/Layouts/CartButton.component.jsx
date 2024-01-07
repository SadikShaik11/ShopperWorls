import React, { useEffect, useState } from "react";
import cartIcon from "../../assets/images/shopping-cart.png";
import { useCart } from "../../utils/Cart.context";
const CartIcon = ({ itemCount, hideIcon }) => {
  // let [count, setCount] = useState(0);
  const { getCartLength } = useCart();
  const count = getCartLength();
  console.log(count);
  return (
    <div>
      {hideIcon ? (
        <></>
      ) : (
        <div className="relative">
          <img
            src={cartIcon}
            alt="cart"
            className="font-poppins w-7 h-7 rounded-full"
          />

          <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            {count}
          </span>
        </div>
      )}{" "}
    </div>
  );
};

export default CartIcon;
