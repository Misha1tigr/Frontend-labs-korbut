import React from 'react';
import GoodsCard from './GoodsCard';

const ProductGallery = () => {
  const products = [
    { id: 1, photo: 'https://prd.place/150?id=1', name: 'Product 1', price: 29.99 },
    { id: 2, photo: 'https://prd.place/150?id=2', name: 'Product 2', price: 39.99 },
    { id: 3, photo: 'https://prd.place/150?id=3', name: 'Product 3', price: 19.99 },
    { id: 4, photo: 'https://prd.place/150?id=4', name: 'Product 4', price: 49.99 },
    { id: 5, photo: 'https://prd.place/150?id=5', name: 'Product 5', price: 59.99 },
    { id: 6, photo: 'https://prd.place/150?id=6', name: 'Product 6', price: 69.99 },
  ];

  return (
    <div style={styles.gallery}>
      {products.map(product => (
        <GoodsCard key={product.id} photo={product.photo} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

const styles = {
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default ProductGallery;
