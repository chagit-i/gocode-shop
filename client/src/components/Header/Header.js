import { useState } from "react/cjs/react.development";
import Product from "../Product/Product";
import "./Header.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import RangeSlider from "../RangeSlider/RangeSlider";

function Header({ ListOfCategories, filterTheCategory, filterPrice }) {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <RangeSlider filterPrice={filterPrice} />
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>

          <select
            onChange={(e) => {
              filterTheCategory(e.target.value);
            }}
          >
            {ListOfCategories.map((category) => (
              <option>{category}</option>
            ))}
          </select>
        </div>
        {/* <Box sx={{ width: 100 }}>
          <Slider
            getAriaLabel={() => "Filter By Price"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box> */}
        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
export default Header;
