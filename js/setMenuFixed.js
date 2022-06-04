const menu = document.querySelector('.header__navigation');
let sticky = menu.offsetTop + 40;

function setMenuFixed(){
    if(window.pageYOffset >= sticky) menu.classList.add('fixed-menu');  
    else menu.classList.remove('fixed-menu'); 
}

window.addEventListener("scroll", setMenuFixed);