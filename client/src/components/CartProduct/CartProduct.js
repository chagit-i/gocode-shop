import "./CartProduct.css";
function CartProduct({ id, amount, image }) {
  return (
    <div class="CartProduct-image">
      <br />
      id : {id}
      amount : {amount}
      <img src={image}></img>
    </div>
  );
}

export default CartProduct;
