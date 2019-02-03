/*Welcome animation*/

const scrollLinesTl = new TimelineMax({
    paused: true
});

scrollLinesTl.add("start", 0)
    .to('.welcome-line:nth-child(1)', 1, {
        y: -300,
        opacity: 0
    }, "start")
    .to('.welcome-line:nth-child(2)', 1, {
        y: -220,
        opacity: 0
    }, "start")
    .to('.welcome-line:nth-child(3)', 1, {
        y: -140,
        opacity: 0
    }, "start")
    .to('.welcome-line', 1, {
        opacity: 1,
        y: 0
    });

/*Play animation with scroll*/
$(window).scroll(function (e) {
    let scrollTop = $(window).scrollTop(),
        winHeight = $('.welcome-container').height(),
        scrollPercent = (scrollTop) / (winHeight + 1200),
        scrollPercentRounded = Math.round(scrollPercent * 100) / 100;

    $('#scrollPercentLabel>span').html(scrollPercentRounded);

    scrollLinesTl.progress(scrollPercent).pause();
});

/*
Smooth Scrolling*/
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

/* carousel */

$('.carousel').carousel({
    interval: 3000
})
