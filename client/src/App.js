import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import MyContext from "./components/MyContext/MyContext";
import React from "react";

import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
function App() {
  const [cartList, setCartList] = useState([]);
  const add = (id, image, price) => {
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
  return (
    <Router>
      <MyContext.Provider value={[cartList, setCartList]}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
            <Link to="/productDetails">ProductDetails</Link>
          </li> */}
          </ul>
        </nav>
        <Switch>
          <Route path="/products/:id">
            <ProductDetails addToCartFunc={add} />
          </Route>

          <Route path="/">
            <Home addToCartFunc={add} />
          </Route>
        </Switch>
      </MyContext.Provider>
    </Router>
  );
}
export default App;
