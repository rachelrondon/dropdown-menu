import { useState } from 'react';
import './Select.css';

const Select = () => {

  const modes = ["auto", "light", "dark"];
  const [selectedMode, setSelectedMode] = useState("auto");
  const className = `layout ${selectedMode}`;

  const updateMode = (mode) => {
    setSelectedMode(mode);
  };

  return (
    <div className={className}>
      <label>
       Mode: 
        <select
          className="select"
          name="selectMode"
          onChange={((e) => updateMode(e.target.value))}
        >
          {modes.map((mode) => {
            return (
              <option value={mode} key={mode}>{mode}</option>
            )
          })}
        </select>
      </label>
    </div>
  )
};

export default Select;