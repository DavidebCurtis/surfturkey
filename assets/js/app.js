// NAV MENU

let menuBtn = document.querySelector('.navbar-menu__btn');
let navMenu = document.querySelector('.navbar-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    
    if(!menuOpen) {
        navMenu.style.display = 'flex';
        navMenu.style.visibility = 'visible';
        document.body.style.position = 'fixed';
        menuBtn.style.zIndex = '3';
        menuOpen = true;

    } else {
        navMenu.style.display = 'none';
        navMenu.style.visibility = 'hidden';
        document.body.style.position = 'relative';
        menuOpen = false;
    }
});