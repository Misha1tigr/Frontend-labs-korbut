import React from 'react';

const GoodsCard = ({ photo, name, price }) => {
  return (
    <div className="goods-card" style={styles.card}>
      <img src={photo} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    margin: '10px',
    width: '200px',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
};

export default GoodsCard;
