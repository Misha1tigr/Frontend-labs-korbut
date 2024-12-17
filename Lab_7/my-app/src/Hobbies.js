import React, { useState } from 'react';
import './Hobbies.css';

const Hobbies = () => {
  const [firstActive, setFirstActive] = useState(false);
  const [secondActive, setSecondActive] = useState(false);

  return (
    <div>
      <h3>Мої хобі:</h3>
      <ul id="hobbies">
        <li
          className={firstActive ? "active" : ""}
          onClick={() => setFirstActive(!firstActive)}
        >
          Читання книг
        </li>
        <li
          className={secondActive ? "active-2" : ""}
          onClick={() => setSecondActive(!secondActive)}
        >
          3д-друк
        </li>
        <li>Програмування</li>
      </ul>
    </div>
  );
};

export default Hobbies;
