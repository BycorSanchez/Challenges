function updateActive(current) {
    const active = 'active-link';

    let links = $('#nav').find('a');
    links.removeClass(active);
    current.addClass(active);
}

function toggleMenu() {
    const visible = 'menu-visible';
    $('body').toggleClass(visible);
}

$(function onReady() {
    $('#nav').on('click', 'a', function() {
        updateActive($(this));
    });

    $('#menu-icon').click(function() {
        toggleMenu();
    });
});