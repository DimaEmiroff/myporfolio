const burger = document.querySelector('#head__burger')
const menu = document.querySelector( '.head__menu');
const body = document.querySelector('body')

burger.addEventListener("click", nav)
function nav () {
    // Переключаем стили элементов при клике
    burger.classList.toggle("_active");
    menu.classList.toggle("_active");
    body.classList.toggle("noscroll");
    renderMenu();
}

// Здесь мы рендерим элементы
function renderMenu() {
    menu.append(body);
}
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    burger.classList.remove("_active");
    menu.classList.remove("_active");
    body.classList.remove("noscroll");
}