function attachNavbarEventListeners() {
    const navLinks = $('.nav-links');
    const burger = $('.burger');
    const links = $('.nav-links li a');

    burger.click(function() {
        navLinks.toggleClass('nav-active');
        burger.toggleClass('toggle');
    });

    links.click(function() {
        navLinks.removeClass('nav-active');
        burger.removeClass('toggle');
    });
}

$(document).ready(function() {
    attachNavbarEventListeners();
});
