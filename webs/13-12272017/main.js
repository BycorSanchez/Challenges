function updateActive(current) {
    const active = 'active-link';

    let links = $('#nav').find('a');
    links.removeClass(active);
    current.addClass(active);
}

function smoothScroll(target) {
    if (target === '#') return;

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 450, 'linear');
}

function toggleMenu() {
    const visible = 'menu-visible';
    $('body').toggleClass(visible);
}

/* TODO: Change active nav link on scroll */
/* TODO: Add back to top icon */

$(document).ready(function() {
    $('#menu header').on('click', 'a', function(event) {
        event.preventDefault();

        updateActive($(this));
        smoothScroll($(this).attr('href'));
    });

    $('#menu-icon').click(function() {
        toggleMenu();
    });
});