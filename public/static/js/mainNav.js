const navLinks = document.querySelectorAll('.openNavLinkMenu');
navLinks.forEach((navLink) => {
    const navLinkMenu = navLink.getElementsByTagName('a')[0];
    navLinkMenu.addEventListener('click', (e) => {
        e.preventDefault();
        let isActive  = navLink.classList.contains('active');
        navLinks.forEach((navLink) => {
            navLink.classList.remove('active');
        })
        !isActive? navLink.classList.add('active')
        :navLink.classList.remove('active') 
        
        
    })
})


