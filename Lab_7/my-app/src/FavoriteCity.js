import React, { useState } from 'react';
import './FavoriteCity.css';

const FavoriteCity = () => {
  // Calculate initial width as 40% of the viewport width
  const initialWidth = window.innerWidth * 0.4;

  const [images, setImages] = useState([{
    src: "https://vidviday.ua/blog/wp-content/uploads/2017/11/Kam.-Podilskyy-povitr.-kuli-03.jpg",
    width: initialWidth
  }]);

  const addImage = () => {
    // Clone the last image's width for the new image
    const lastImage = images[images.length - 1];
    setImages([...images, { src: lastImage.src, width: lastImage.width }]);
  };

  const increaseImage = () => {
    setImages(images.map((img, index) => 
      index === images.length - 1 ? { ...img, width: img.width + 20 } : img
    ));
  };

  const decreaseImage = () => {
    setImages(images.map((img, index) => 
      index === images.length - 1 ? { ...img, width: img.width - 20 } : img
    ));
  };

  const removeImage = () => {
    if (images.length > 1) {
      setImages(images.slice(0, -1));
    }
  };

  return (
    <div>
      <h3>Моє улюблене місто - Кам'янець-Подільський</h3>
      <p>Моє улюблене місто — Кам'янець-Подільський. Це маленьке і надзвичайно затишне містечко захоплює своїми старовинними вуличками, унікальною архітектурою та мальовничими краєвидами. <br />Місто оточене глибоким каньйоном річки Смотрич, а його серцем є велична фортеця, яка вражає своєю історичною величчю. Тут відчувається дух минулих століть, і кожен крок переносить у часи середньовічних легенд.</p>
      {images.map((img, index) => (
        <img key={index} src={img.src} alt="Фото Кам'янця-Подільського" style={{ width: img.width }} />
      ))}
      <div className="image-buttons">
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseImage}>Збільшити</button>
        <button onClick={decreaseImage}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
      <p>Більше інформації про місто можна знайти на <a href="https://kamenca.net/uk">сайті міста</a>.</p>
    </div>
  );
};

export default FavoriteCity;
