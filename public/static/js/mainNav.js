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


const leftMenu = document.getElementById('leftMenu');
const leftMenuOpener = document.getElementById('leftMenuOpener');

leftMenuOpener.addEventListener('click', (e) => {
    e.preventDefault();
    leftMenu.classList.toggle('active');
    if (leftMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';  
    }else{
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';  
    }
});
