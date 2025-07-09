const button = document.querySelector('.iconShareButton');
const popUp = document.querySelector('.boxPopUp');
let active = false;

button.addEventListener('click',() => {
    if(!active){
        active = true;
        popUp.classList.add('activePopUp')
    }else{
        active = false;
        popUp.classList.remove('activePopUp')
    }
})
