import React, { useState } from 'react';
import './Hobbies.css';

const Hobbies = () => {
  const [activeHobby, setActiveHobby] = useState(null);

  const handleHobbyClick = (index) => {
    setActiveHobby(index);
  };

  return (
    <div>
      <h3>Мої хобі:</h3>
      <ul id="hobbies">
        {['Читання книг', '3д-друк', 'Програмування'].map((hobby, index) => (
          <li
            key={index}
            className={activeHobby === index ? (index === 0 ? "active" : "active-2") : ""}
            onClick={() => handleHobbyClick(index)}
          >
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
