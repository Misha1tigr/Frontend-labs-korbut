// Завдання 1: Зміна кольорів на елементах списку
document.getElementById("hobbies").children[0].addEventListener("click", function () {
    this.classList.toggle("active");
});

document.querySelector("#hobbies li:nth-child(2)").addEventListener("click", function () {
    this.classList.toggle("active-2");
});

// Завдання 2
const imageControls = document.getElementById("imageControls");
const cityImage = document.getElementById("cityImage");

const addedImages = [];

imageControls.addEventListener("click", (event) => {
    if (event.target.id === "addImage") {
        // Клонувати зображення
        const newImage = cityImage.cloneNode();
        newImage.style.width = cityImage.clientWidth + "px"; // Копіювати розмір оригіналу на нове зображення
        cityImage.parentNode.insertBefore(newImage, imageControls); // Вставляємо нове фото перед кнопками
        addedImages.push(newImage); // Додаємо до списку доданих зображень
    } else if (event.target.id === "increaseImage") {
        if (addedImages.length > 0) {
            // Збільшуємо останню копію
            const latestImage = addedImages[addedImages.length - 1];
            latestImage.style.width = latestImage.clientWidth + 20 + "px";
        } else {
            // Збільшуємо оригінал
            cityImage.style.width = cityImage.clientWidth + 20 + "px";
        }
    } else if (event.target.id === "decreaseImage") {
        if (addedImages.length > 0) {
            // Зменшуємо останню копію
            const latestImage = addedImages[addedImages.length - 1];
            latestImage.style.width = latestImage.clientWidth - 20 + "px";
        } else {
            // Зменшуємо оригінал
            cityImage.style.width = cityImage.clientWidth - 20 + "px";
        }
    } else if (event.target.id === "removeImage") {
        if (addedImages.length > 0) {
            const latestImage = addedImages.pop(); // Видаляємо зображення з списку доданих зображень
            latestImage.remove(); // Видаляємо зображення з документа
        }
    }
});
