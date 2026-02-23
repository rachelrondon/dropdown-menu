import { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {

  const listOfColors = ["red", "yellow", "blue"];
  const [selectedColor, setSelectedColor] = useState("red");
  const className = `layout ${selectedColor}`;

  const updateColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className={className}>
      <label>
        COLOR:
        <select className="dropdown" name="selectColor" onChange={((e) => updateColor(e.target.value))}>
          {listOfColors.map((color) => {
            return (
              <option value={color} key={color}>{color}</option>
            )
          })}
        </select>
      </label>
    </div>
  )
};

export default Dropdown;