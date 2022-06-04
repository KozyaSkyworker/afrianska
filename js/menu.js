/* Я знаю про camelCase. Просто привык писать константы большими */

const MENU_BTN = document.querySelector('.header__navigation-menu');
const MENU = document.querySelector('.menu');
const MENU_ITEM = document.querySelectorAll('.navigation__list-item-box');

MENU_BTN.addEventListener('click', function(){
    MENU.classList.add('menu_active');
    const CLOSE_BTN = document.querySelector('.menu__close-btn');
    CLOSE_BTN.addEventListener('click', () => {
        MENU.classList.remove('menu_active');
    })
});

MENU_ITEM.forEach(element => {
    element.addEventListener('click', () =>{
        element.querySelector('.navigation__list-item-img').classList.toggle('navigation__list-item-img_active');
        if(element.nextElementSibling.style.maxHeight){
            element.nextElementSibling.style.maxHeight = null;
            element.style.color = "#fff";
        }            
        else{
            element.nextElementSibling.style.maxHeight = element.nextElementSibling.scrollHeight + "px";
            element.style.color = "#a8cbeb";
        }
    })
});