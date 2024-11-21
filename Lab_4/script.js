// Завдання 1: Зміна кольорів на елементах списку
document.getElementById("hobbies").children[0].addEventListener("click", function () {
    this.classList.toggle("active");
});

document.querySelector("#hobbies li:nth-child(2)").addEventListener("click", function () {
    this.classList.toggle("active-2");
});

