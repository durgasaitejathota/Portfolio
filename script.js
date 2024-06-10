document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    mobileMenu.addEventListener('click', function () {
        navList.classList.toggle('nav-active');
    });

    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('nav ul li a');

    for (let link of navLinks) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});
