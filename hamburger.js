const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mobile-nav-full');
let isOpen = false;


function mobileNav(){
    switch(isOpen) {
        case false: nav.style.display = 'block'; isOpen = true; break;
        case true: nav.style.display = 'none'; isOpen = false; break;
    }
}

hamburger.addEventListener('click', mobileNav);
