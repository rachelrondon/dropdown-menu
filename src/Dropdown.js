import { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {

  const listOfColors = ["light", "dark", "auto"];
  const [selectedColor, setSelectedColor] = useState("light");
  const className = `layout ${selectedColor}`;

  const updateColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className={className}>
      <label>
        Appearance: 
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