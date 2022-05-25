import React from 'react';

const ColorPicker = (props) => (
  <div>
    {props.colors.map(color =>
      <button className="myBtn" key={color}>{color} - My Color</button>
    )}
  </div>
);

export default ColorPicker;
