$(document).ready(function() {

    function updateActive() {
        const activeLink = 'active-link';
        const position = $(this).scrollTop();

        $('#nav a').each(function() {
            let link = $(this);
            let reference = $(link.attr("href"));

            let top = reference.position().top - 1;
            let bottom = top + reference.height() + 1;

            if (top <= position && bottom > position) {
                $('#nav').find('a').removeClass(activeLink);
                link.addClass(activeLink);
            } else {
                link.removeClass(activeLink);
            }
        });
    };

    function toggleMenu() {
        $('body').toggleClass('menu-visible');
    };

    function smoothScroll(target) {
        if (target === '#') return;

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 450, 'linear');
    };


    $('#menu header').on('click', 'a', function(event) {
        event.preventDefault();
        smoothScroll($(this).attr('href'));
    });

    $('#menu-icon').click(toggleMenu);

    $(document).on("scroll", updateActive);
});