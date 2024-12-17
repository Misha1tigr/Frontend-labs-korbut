import React from 'react';
import './App.css';
import AuthorInfo from './AuthorInfo';
import Hobbies from './Hobbies';
import FavoriteBooks from './FavoriteBooks';
import FavoriteCity from './FavoriteCity';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#cff7cf' }}>
      <AuthorInfo />
      <Hobbies />
      <FavoriteBooks />
      <FavoriteCity />
    </div>
  );
}

export default App;
