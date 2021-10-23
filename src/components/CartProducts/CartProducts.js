import CartProduct from "../CartProduct/CartProduct";
import MyContext from "../MyContext/MyContext";
import { useContext } from "react";
function CartProducts() {
  const [cartList, setCartList] = useContext(MyContext);
  return (
    <div>
      MyCart
      {cartList.map((product) => (
        <CartProduct
          key={product.id}
          id={product.id}
          amount={product.amount}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default CartProducts;
