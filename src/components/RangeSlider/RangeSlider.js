import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({ filterPrice }) {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    filterPrice(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 100 }}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
