import { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import MyContext from "../components/MyContext/MyContext";
import Header from "../components/Header/Header";
import TemporaryDrawer from "../components/TemporaryDrawer/TemporaryDrawer";
import Products from "../components/Products/Products";

function Home({ addToCartFunc }) {
  const [listOfProducts, setlistOfProducts] = useState([]);

  const [Filteredcategory, SetfilteredCategory] = useState(listOfProducts);
  const [filterCategoryPrice, setfilterCategoryPrice] = useState([6, 1000]);
  const [cartList, setCartList] = useContext(MyContext);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((listOfProducts) => {
        setlistOfProducts(listOfProducts);
        SetfilteredCategory(listOfProducts);
        setfilterCategoryPrice(listOfProducts);
      });
  }, []);
  const categories = listOfProducts
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const filterCategory = (category) => {
    SetfilteredCategory(
      listOfProducts.filter((product) => product.category === category)
    );
    setfilterCategoryPrice(
      listOfProducts.filter((product) => product.category === category)
    );
  };
  const filterPrice = (price) => {
    setfilterCategoryPrice(
      Filteredcategory.filter(
        (product) => product.price >= price[0] && product.price <= price[1]
      )
    );
  };
  return (
    <div className="App">
      {/* <HideAndShow/>  */}

      <Header
        ListOfCategories={categories}
        filterTheCategory={filterCategory}
        filterPrice={filterPrice}
      />
      <TemporaryDrawer />
      <Products List={filterCategoryPrice} addToCartFunc={addToCartFunc} />
    </div>
  );
}
export default Home;
