import React, { useContext, useState } from "react";
import MyContext from "../MyContext/MyContext";
import CartProducts from "../CartProducts/CartProducts";

function Cart() {
  const [cartList, setCartList] = useContext(MyContext);
  let sum = 0;
  const getSum = () => {
    cartList.map((p) => (sum += p.price * p.amount));
    return sum;
  };
  return (
    <div>
      MyCart
      {cartList.length > 0 && (
        <div>
          <CartProducts />
          <div>totalPrice: {getSum()}</div>
        </div>
      )}
    </div>
  );
}

export default Cart;
