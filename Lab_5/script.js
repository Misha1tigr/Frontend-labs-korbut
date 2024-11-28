// Додаємо обробник події на кнопку відправки форми
document.getElementById("submitButton").addEventListener("click", function () {
    // Створюємо об'єкт для кожного поля форми з відповідними параметрами
    const formFields = {
        name: {
            value: document.getElementById("name").value, // Значення поля ПІБ
            regex: /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/, // Регулярний вираз для перевірки формату ПІБ
            minLength: 5, // Мінімальна довжина введення
            maxLength: 50, // Максимальна довжина введення
            error: "ПІБ має бути у форматі 'Прізвище І.І.', мінімум 5 символів, максимум 50" // Повідомлення про помилку
        },
        idCard: {
            value: document.getElementById("idCard").value, // Значення поля ID-card
            regex: /^[A-ZА-Я]{2}\s№\d{6}$/, // Регулярний вираз для перевірки формату ID-карти
            error: "ID-card має бути у форматі 'AA №123456'" // Повідомлення про помилку
        },
        faculty: {
            value: document.getElementById("faculty").value, // Значення поля факультету
            regex: /^[А-ЯІЇЄҐа-яіїєґ\s]+$/, // Регулярний вираз для перевірки лише літер і пробілів
            minLength: 3, // Мінімальна довжина введення
            maxLength: 30, // Максимальна довжина введення
            error: "Факультет має містити лише літери, мінімум 3 символи, максимум 30" // Повідомлення про помилку
        },
        birthdate: {
            value: document.getElementById("birthdate").value, // Значення поля дати народження
            regex: /^\d{2}\.\d{2}\.\d{4}$/, // Регулярний вираз для перевірки формату дати (дд.мм.рррр)
            error: "Дата народження має бути у форматі 'дд.мм.рррр'" // Повідомлення про помилку
        },
        address: {
            value: document.getElementById("address").value, // Значення поля адреси
            regex: /^м\.\s[А-ЯІЇЄҐа-яіїєґ]+$/, // Регулярний вираз для перевірки формату адреси (місто)
            minLength: 5, // Мінімальна довжина введення
            maxLength: 100, // Максимальна довжина введення
            error: "Адреса має бути у форматі 'м. Місто', мінімум 5 символів, максимум 100" // Повідомлення про помилку
        },
        email: {
            value: document.getElementById("email").value, // Значення поля email
            regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Регулярний вираз для перевірки формату email
            minLength: 5, // Мінімальна довжина введення
            maxLength: 50, // Максимальна довжина введення
            error: "E-mail має бути у форматі 'example@example.com', мінімум 5 символів, максимум 50" // Повідомлення про помилку
        }
    };

    let isValid = true; // Прапорець для перевірки валідності форми
    const output = document.getElementById("output"); // Елемент для виведення результатів
    output.innerHTML = ""; // Очищення попереднього вмісту

    // Проходимо по кожному полю форми і перевіряємо його
    for (const field in formFields) {
        const input = document.getElementById(field); // Вибираємо інпут за ідентифікатором
        const { value, regex, minLength, maxLength, error } = formFields[field]; // Деструктуризація об'єкта
        let errorMessage = error; // Початкове повідомлення про помилку

        // Перевірка на відповідність регулярному виразу
        if (!regex.test(value)) {
            errorMessage = error;
        }

        // Перевірка на мінімальну довжину
        if (minLength && value.length < minLength) {
            errorMessage = `Довжина поля '${field}' має бути не менше ${minLength} символів.`;
        }
        // Перевірка на максимальну довжину
        if (maxLength && value.length > maxLength) {
            errorMessage = `Довжина поля '${field}' має бути не більше ${maxLength} символів.`;
        }

        // Якщо є помилка, виділяємо поле червоним і виводимо повідомлення
        if (errorMessage !== error || !regex.test(value)) {
            input.classList.add("error"); // Додаємо клас для стилізації помилки
            isValid = false; // Змінюємо прапорець на false
            output.innerHTML += `<p>${errorMessage}</p>`; // Додаємо повідомлення про помилку до виведення
        } else {
            input.classList.remove("error"); // Видаляємо клас помилки, якщо все правильно
        }
    }

    // Якщо всі поля заповнені правильно, виводимо дані
    if (isValid) {
        output.classList.remove("error");
        output.style.display = "block"; // Показуємо блок виведення
        output.innerHTML = "<h3>Інформація введена правильно:</h3>";
        for (const field in formFields) {
            output.innerHTML += `<p><strong>${field}:</strong> ${formFields[field].value}</p>`;
        }
    } else {
        output.classList.add("error");
        output.style.display = "block"; // Показуємо блок виведення помилки
    }
});


// Створення таблиці 6x6
const tableWrapper = document.getElementById("tableWrapper");
const table = document.createElement("table");

// Створюємо таблицю
for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement("td");
        const cellNumber = i * 6 + j + 1;
        cell.textContent = cellNumber;

        // Події для клітинки №4
        if (cellNumber === 4) {
            // Зміна кольору на випадковий при наведенні
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = getRandomColor();
            });

            // Виклик палітри для вибору кольору при кліку
            cell.addEventListener("click", () => {
                const colorPicker = document.createElement("input");
                colorPicker.type = "color";
                colorPicker.style.display = "none"; // Ховаємо елемент

                // Додаємо палітру в документ
                document.body.appendChild(colorPicker);

                // Застосовуємо обраний колір
                colorPicker.addEventListener("input", () => {
                    cell.style.backgroundColor = colorPicker.value;
                });

                // Видаляємо палітру після вибору кольору
                colorPicker.addEventListener("change", () => {
                    colorPicker.remove();
                });

                // Симулюємо натискання для відкриття палітри
                colorPicker.click();
            });
        }

        // Зміна кольору побічної діагоналі при подвійному кліку
        cell.addEventListener("dblclick", () => {
            highlightDiagonal();
        });

        row.appendChild(cell);
    }
    table.appendChild(row);
}
tableWrapper.appendChild(table);

// Функція для генерації випадкового кольору
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Функція для зміни кольору побічної діагоналі
function highlightDiagonal() {
    const cells = table.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        const row = Math.floor(i / 6);
        const col = i % 6;
        // Умови для побічної діагоналі (сума індексів == 5)
        if (row + col === 5) {
            cells[i].style.backgroundColor = getRandomColor();
        }
    }
}
