// navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const close = document.getElementById('close');

burger.addEventListener('click', () => {
    navLinks.classList.add('active');
    burger.style.display='none';
    close.style.display='unset';
});

close.addEventListener('click', ()=>{
    navLinks.classList.remove('active');
    close.style.display='none';
    burger.style.display='unset';

})


// scroll bar

let left_icon = document.getElementById('left_icon');
let right_icon = document.getElementById('right_icon');
let cards = document.getElementById('cards');

function scroll(){
    right_icon.addEventListener('click' , ()=> {
    cards.scrollBy({
        left: 270,
        behavior: 'smooth',
    });
})

left_icon.addEventListener('click' , ()=> {
    cards.scrollBy({
        left:-270,
        behavior:'smooth',
    });

})
}
scroll()



// document.addEventListener('contextmenu', event => event.preventDefault());//for anyone not inspect  your code
