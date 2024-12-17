import React, { useState } from 'react';

function CityImage() {
  const [images, setImages] = useState([]);
  const [size, setSize] = useState(300);

  const addImage = () => {
    setImages([...images, size]);
  };

  const increaseSize = () => setSize(size + 20);
  const decreaseSize = () => setSize(size - 20);
  const removeImage = () => setImages(images.slice(0, -1));

  return (
    <div>
      <img
        src="https://vidviday.ua/blog/wp-content/uploads/2017/11/Kam.-Podilskyy-povitr.-kuli-03.jpg"
        alt="Фото Кам'янця-Подільського"
        style={{ width: size }}
      />
      {images.map((imgSize, index) => (
        <img
          key={index}
          src="https://vidviday.ua/blog/wp-content/uploads/2017/11/Kam.-Podilskyy-povitr.-kuli-03.jpg"
          alt={`Фото ${index}`}
          style={{ width: imgSize }}
        />
      ))}
      <div className="image-buttons">
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseSize}>Збільшити</button>
        <button onClick={decreaseSize}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </div>
  );
}

export default CityImage;
