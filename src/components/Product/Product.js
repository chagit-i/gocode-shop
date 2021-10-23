import { useState } from "react";
import "./Product.css";
import myContext from "../MyContext/MyContext";
import { useContext } from "react";
function Product({ id, title, price, description, category, image, rating }) {
  const [cartList, setCartList] = useContext(myContext);

  const add = () => {
    let found = cartList.find(function (element) {
      return element.id === id;
    });
    if (found === undefined) {
      setCartList([
        { id: id, amount: 1, image: image, price: price },
        ...cartList,
      ]);
    } else {
      let commentIndex = cartList.findIndex(function (c) {
        return c.id === id;
      });
      cartList[commentIndex].amount++;
      setCartList([...cartList]);
    }
  };

  const remove = () => {
    let commentIndex = cartList.findIndex(function (c) {
      return c.id === id;
    });
    if (commentIndex !== undefined) {
      if (cartList[commentIndex].amount > 1) {
        cartList[commentIndex].amount--;
        setCartList([...cartList]);
      } else {
        cartList.splice(commentIndex, 1);
        setCartList([...cartList]);
      }
    }
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image}></img>
        {/* src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" */}
      </div>
      <div className="product-info">
        {/* //       <h5>Winter Jacket</h5>
    //       <h6>$99.99</h6> */}
        id:{id}
        {/* <br /> title:{title} */}
        <br /> price:{price}${/* <br /> description:{description} */}
        <br /> category:{category}
        {/* <br /> rate:{rating.rate}
        <br /> count:{rating.count} */}
        <br />
      </div>
      <div className="add-remove-to-cart">
        <button
          onClick={() => {
            add();
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            remove();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Product;
