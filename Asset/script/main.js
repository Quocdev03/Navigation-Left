const menuItem = document.querySelectorAll('.menu-item');
menuItem.forEach(item => item.addEventListener("click", function (event) {
    menuItem.forEach(el => el.classList.remove("active"));
    event.target.classList.add("active");
}));