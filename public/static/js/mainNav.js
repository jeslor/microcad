const navLinks = document.querySelectorAll('.openNavLinkMenu');
navLinks.forEach((navLink) => {
     navLink.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach((navLink) => {
            navLink.classList.remove('active');
        })
        navLink.classList.add('active'); 
    })
})