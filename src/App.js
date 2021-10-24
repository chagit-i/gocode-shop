import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import HideAndShow from "./components/HideAndShow/HideAndShow";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import CartProducts from "./components/CartProducts/CartProducts";
import MyContext from "./components/MyContext/MyContext";
import TemporaryDrawer from "./components/TemporaryDrawer/TemporaryDrawer";

function App() {
  const [listOfProducts, setlistOfProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [Filteredcategory, SetfilteredCategory] = useState(listOfProducts);
  const [filterCategoryPrice, setfilterCategoryPrice] = useState([6, 1000]);
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
    <MyContext.Provider value={[cartList, setCartList]}>
      <div className="App">
        {/* <HideAndShow/>  */}

        <Header
          ListOfCategories={categories}
          filterTheCategory={filterCategory}
          filterPrice={filterPrice}
        />
        <TemporaryDrawer />
        <Products List={filterCategoryPrice} />
      </div>
    </MyContext.Provider>
  );
}
export default App;
