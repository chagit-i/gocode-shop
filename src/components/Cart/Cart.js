import React, { useContext } from "react";
import MyContext from "../MyContext/MyContext";
import CartProducts from "../CartProducts/CartProducts";

function Cart() {
  const [cartList, setCartList] = useContext(MyContext);
  return (
    <div>
      {/* {cartList.map((item) => (
        <div key={item.id}>
          <span>title:{item.title}</span>
        </div>
      ))} */}
      <CartProducts />
    </div>
  );
}

export default Cart;
