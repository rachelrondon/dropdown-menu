import { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {

  const themes = ["light", "dark", "auto"];
  const [selectedTheme, setSelectedTheme] = useState("light");
  const className = `layout ${selectedTheme}`;

  const updateTheme = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className={className}>
      <label>
        Appearance: 
        <select className="dropdown" name="selectTheme" onChange={((e) => updateTheme(e.target.value))}>
          {themes.map((theme) => {
            return (
              <option value={theme} key={theme}>{theme}</option>
            )
          })}
        </select>
      </label>
    </div>
  )
};

export default Dropdown;