import React from "react";
import CssOptionsList from "./CssOptionsList.js";
import SelectedCssOptions from "./SelectedCssOption.js";

const CssOptions = (props) => (
  <div>
    <h2>CSS Color Options</h2>
    <div className="color-options-row"></div>
    <CssOptionsList selectColor={props.selectColor} />
    <SelectedCssOptions
      palette={props.palette}
      selectedColor={props.selectedColor}
      addToPalette={props.addToPalette}
    />
  </div>
);

export default CssOptions;
