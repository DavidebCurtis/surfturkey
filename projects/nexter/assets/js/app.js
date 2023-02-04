// NAV MENU

let menuBtn = document.querySelector('.navbar-menu__btn');
const navMenu = document.querySelector('.navbar-menu');
const discover = document.querySelector('#discover');
const titles = document.querySelector('.titles');
const hero = document.querySelector('#hero');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    
    if(!menuOpen) {
        if (document.URL.includes('surfturkey')) {
            discover.style.display = 'none';
            titles.style.display = 'none';
            hero.style.display = 'none';
        }
        navMenu.style.display = 'flex';
        navMenu.style.visibility = 'visible';
        menuOpen = true;
    } else {
        if (document.URL.includes('surfturkey')) {
            discover.style.display = 'inline-block';
            titles.style.display = 'inline-block';
            hero.style.display = 'inline-block';
        }
        navMenu.style.display = 'none';
        navMenu.style.visibility = 'hidden';
        menuOpen = false;
    }
});