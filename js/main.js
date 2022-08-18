const btnMenu = document.querySelector('.icon-menu');
const Menu =document.querySelector('.menu_mobile');
const btnClose = document.querySelector('.mobile_close');

btnMenu.onclick = function () {
    Menu.style.display = 'block';
}

btnClose.onclick = function () {
    Menu.style.display = 'none';
}