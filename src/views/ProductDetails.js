import { useParams } from "react-router";
import { useState, useEffect } from "react";

function ProductDetails({ addToCartFunc }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [id]);
  return (
    <div>
      <div>{product?.description}</div>
      <button
        onClick={() => {
          addToCartFunc(product?.id, product?.image, product?.price);
        }}
      >
        add to cart
      </button>
      <img src={product?.image}></img>
    </div>
  );
}
export default ProductDetails;
