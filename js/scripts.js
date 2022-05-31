/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // TODO: Social Media Icon Containers
    //? Facebook Social Media
    const openFacebook = _ => window.open("https://www.facebook.com/uwbbap/");
    document.querySelector("#facebook-logo").addEventListener("click", openFacebook);

    //? YouTube Social Media
    const openYouTube = _ => window.open("https://www.youtube.com/channel/UCn_upl5jfuY4O8DvhzepHBQ");
    document.querySelector("#youtube-logo").addEventListener("click", openYouTube);

    //? LinkedIn Social Media
    const openLinkedIn = _ => window.open("https://www.linkedin.com/company/uwb-bap/");
    document.querySelector("#linkedin-logo").addEventListener("click", openLinkedIn);

    //? Instagram Social Media
    const openInstagram = _ => window.open("https://www.instagram.com/uwbbap/?hl=en");
    document.querySelector("#instagram-logo").addEventListener("click", openInstagram);
});
