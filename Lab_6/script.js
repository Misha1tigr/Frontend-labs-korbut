// Додаємо обробник події до кнопки "Отримати інформацію"
// При натисканні викликається функція fetchUserInfo
document.getElementById('fetchUserBtn').addEventListener('click', fetchUserInfo);

// Функція для отримання інформації про користувачів
function fetchUserInfo() {
    const url = 'https://randomuser.me/api/?results=5'; // URL для отримання 5 випадкових користувачів

    // Використовуємо fetch для отримання даних з API
    fetch(url).then(response => {
            // Перевіряємо, чи успішний запит
            if (!response.ok) {
                throw new Error(`HTTP помилка! Статус: ${response.status}`);
            }
            return response.json(); // Перетворюємо відповідь у формат JSON
        })
        .then(data => {
            const users = data.results; // Масив отриманих користувачів
            const userInfoDiv = document.getElementById('userInfo');
            userInfoDiv.innerHTML = ''; // Очищаємо попередній вміст перед виведенням нових даних

            // Проходимося по кожному користувачу в отриманих даних
            users.forEach(user => {
                // Створюємо div для кожного користувача
                const userCard = document.createElement('div');
                userCard.className = 'user-card'; // Додаємо клас для стилізації

                // Заповнюємо картку користувача потрібною інформацією
                userCard.innerHTML = `
                    <img src="${user.picture.large}" alt="Фото користувача">
                    <div>
                        <p><strong>Ім'я:</strong> ${user.name.first} ${user.name.last}</p>
                        <p><strong>Місто:</strong> ${user.location.city}</p>
                        <p><strong>Поштовий індекс:</strong> ${user.location.postcode}</p>
                        <p><strong>Телефон:</strong> ${user.phone}</p>
                    </div>
                `;
                // Додаємо картку користувача до контейнера
                userInfoDiv.appendChild(userCard);
            });
        })
        .catch(error => {
            // Виводимо помилку у разі проблем із завантаженням
            console.error('Помилка завантаження даних:', error);
        });
}
