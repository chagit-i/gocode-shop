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

function App() {
  const [listOfProducts, setlistOfProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((listOfProducts) => {
        setlistOfProducts(listOfProducts);
        SetfilteredCategory(listOfProducts);
      });
  }, []);
  const categories = listOfProducts
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  const [Filteredcategory, SetfilteredCategory] = useState(listOfProducts);
  const filterCategory = (category) => {
    SetfilteredCategory(
      listOfProducts.filter((product) => product.category === category)
    );
  };
  const [cartList, setCartList] = useState([]);

  return (
    <MyContext.Provider value={[cartList, setCartList]}>
      <div className="App">
        {/* <HideAndShow/>  */}

        <Header
          ListOfCategories={categories}
          filterTheCategory={filterCategory}
        />
        <Cart />
        <Products List={Filteredcategory} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
