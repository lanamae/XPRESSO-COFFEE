// alert('heu')

const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const navbar = document.querySelector('#navbar');


close.addEventListener('click', () =>{
    navbar.classList.remove('open');
})

menu.addEventListener('click', () =>{
    navbar.classList.add('open');
    // alert('test')
    
})


// const closeNav = () =>{
//     navbar.classList.remove('open');
// }

// const openNav = () =>{
//     navbar.classList.add('open');
//     alert('test')
// }