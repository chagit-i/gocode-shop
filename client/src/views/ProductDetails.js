import { useParams } from "react-router";
import { useState, useEffect } from "react";

function ProductDetails({ addToCartFunc }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`/api/products/${id}`)
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
          addToCartFunc(product?._id, product?.image, product?.price);
        }}
      >
        add to cart
      </button>
      <div class="ProductDetails-image">
        <img src={product?.image}></img>
      </div>
    </div>
  );
}
export default ProductDetails;
