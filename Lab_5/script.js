// Додаємо обробник події для кнопки "Перевірити"
document.getElementById("submitButton").addEventListener("click", function () {
    // Описуємо всі поля форми та їх перевірки
    const formFields = {
        name: {
            value: document.getElementById("name").value,
            regex: /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
            minLength: 5,
            maxLength: 50,
            error: "ПІБ має бути у форматі 'Прізвище І.І.', мінімум 5 символів, максимум 50"
        },
        idCard: {
            value: document.getElementById("idCard").value,
            regex: /^[A-ZА-Я]{2}\s№\d{6}$/,
            error: "ID-card має бути у форматі 'AA №123456'"
        },
        faculty: {
            value: document.getElementById("faculty").value,
            regex: /^[А-ЯІЇЄҐа-яіїєґ\s]+$/,
            minLength: 3,
            maxLength: 30,
            error: "Факультет має містити лише літери, мінімум 3 символи, максимум 30"
        },
        birthdate: {
            value: document.getElementById("birthdate").value,
            regex: /^\d{2}\.\d{2}\.\d{4}$/,
            error: "Дата народження має бути у форматі 'дд.мм.рррр'"
        },
        address: {
            value: document.getElementById("address").value,
            regex: /^м\.\s[А-ЯІЇЄҐа-яіїєґ]+$/,
            minLength: 5,
            maxLength: 100,
            error: "Адреса має бути у форматі 'м. Місто', мінімум 5 символів, максимум 100"
        },
        email: {
            value: document.getElementById("email").value,
            regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            minLength: 5,
            maxLength: 50,
            error: "E-mail має бути у форматі 'example@example.com', мінімум 5 символів, максимум 50"
        }
    };

    let isValid = true; // Флаг для перевірки валідності всіх полів
    const output = document.getElementById("output");
    output.innerHTML = ""; // Очищаємо попередній результат

    // Перевіряємо кожне поле форми
    for (const field in formFields) {
        const input = document.getElementById(field);
        const { value, regex, minLength, maxLength, error } = formFields[field];
        let errorMessage = error;

        // Перевірка регулярного виразу
        if (!regex.test(value)) {
            errorMessage = error;
        }

        // Перевірка довжини
        if (minLength && value.length < minLength) {
            errorMessage = `Довжина поля '${field}' має бути не менше ${minLength} символів.`;
        }
        if (maxLength && value.length > maxLength) {
            errorMessage = `Довжина поля '${field}' має бути не більше ${maxLength} символів.`;
        }

        // Якщо є помилка, додаємо клас "error" та відображаємо повідомлення
        if (errorMessage !== error || !regex.test(value)) {
            input.classList.add("error");
            isValid = false;
            output.innerHTML += `<p>${errorMessage}</p>`;
        } else {
            input.classList.remove("error");
        }
    }

    // Якщо всі поля валідні, виводимо успішний результат
    if (isValid) {
        output.classList.remove("error");
        output.style.display = "block";
        output.innerHTML = "<h3>Введена інформація:</h3>";
        for (const field in formFields) {
            output.innerHTML += `<p><strong>${field}:</strong> ${formFields[field].value}</p>`;
        }
    } else {
        // Якщо є помилки, додаємо стилі для відображення помилок
        output.classList.add("error");
        output.style.display = "block";
    }
});
