const d = document;

const nav = d.querySelectorAll('.nav-li');
const dropDown = d.querySelectorAll(".list-onclick");

nav.forEach(e => {
   e.addEventListener('click', () => {
      if(e.classList.contains('active')) {
         e.classList.toggle('active');
     } else {
         nav.forEach(e => {
             e.classList.remove('active');
         });
         e.classList.toggle('active');
     }
   });
});

const hamburger = d.getElementById('hamburger');
const navMobile = d.querySelector('.nav-mob');

hamburger.addEventListener('click', e => {
    navMobile.classList.toggle('activate');

    if (navMobile.classList.contains('activate')){
        hamburger.src = './images/icon-close.svg';
    }
    else {
        hamburger.src = './images/icon-hamburger.svg'; 
    }
})

const navMob = d.querySelectorAll('.li-mob');
const dropDownMob = d.querySelectorAll(".list-onclick");

navMob.forEach(e => {
   e.addEventListener('click', () => {
      if(e.classList.contains('active')) {
         e.classList.toggle('active');
     } else {
         navMob.forEach(e => {
             e.classList.remove('active');
         });
         e.classList.toggle('active');
     }
   });
});