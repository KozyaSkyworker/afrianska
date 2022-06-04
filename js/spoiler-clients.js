const spoiler = document.querySelector('.spoiler'),
      spoilerArrow = document.querySelector('.spoiler__arrow'),
      clientsLogosWrapper = document.querySelector('.clients__items');

spoiler.onclick = () => {
    spoilerArrow.classList.toggle('spoiler__arrow_active');
    if(clientsLogosWrapper.style.maxHeight)
        clientsLogosWrapper.style.maxHeight = null;
    else
        clientsLogosWrapper.style.maxHeight = clientsLogosWrapper.scrollHeight + "px";
}