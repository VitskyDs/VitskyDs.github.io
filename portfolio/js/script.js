const mobileMenu = $('.mobile-menu');

const removeNoScroll = function () {
    $('body').removeClass('no-scroll');
}

/*Initialize Flickity Carousels*/
$('.main-carousel').flickity({
    cellAlign: 'center',
    contain: true,
    imagesLoaded: true,
    setGallerySize: true,
    prevNextButtons: false,
    pageDots: false,
    cellSelector: '.carousel-cell',
    wrapAround: true
});

const cellButtonGroup = $('.cell-button-group');

//update button on change slide
$('.main-carousel').on('select.flickity', function () {
    const cellButtons = $(this).parent('.section-carousel').next().find('.button'),
        flkty = $(this).data('flickity'),
        caption = $(this).parent('.section-carousel').find('.caption'),
        selectedImg = $(this).find('.is-selected.carousel-cell').find('img');

    caption.text(selectedImg.attr('alt'));
    cellButtons.filter('.is-selected').removeClass('is-selected');
    cellButtons.eq(flkty.selectedIndex).addClass('is-selected');
});

// select cell on button click
cellButtonGroup.on('click touchstart', '.button', function () {
    const carousel = $(this).parent('.section-carousel-buttons').prev().find('.main-carousel');
    var index = $(this).index();
    carousel.flickity('select', index);
});
// previous
$('.carousel-button-prev').on('click touchstart', function () {
    $(this).parents('.section-carousel-buttons').prev().find('.main-carousel').flickity('previous');
});
// next
$('.carousel-button-next').on('click touchstart', function () {
    $(this).parents('.section-carousel-buttons').prev().find('.main-carousel').flickity('next');
});

/*Menu*/

const toggleMenu = function () {
        mobileMenu.toggleClass('menu-closed');
        $('.menu-button').toggleClass('menu-button-close');
        $('header').find('path').toggleClass('path-fill-white');
        $('body').toggleClass('position-fixed');
    }
    //toggles menu
$('body').on('click touchstart', '.menu-button, .menu-link', function () {
    toggleMenu();
});

/*Video Controls*/
$('.video-section').click(function () {
    const video = $(this).find('video').get(0);
    if (video.paused) {
        $(this).children('.video-white-overlay').fadeOut(200);
        video.play();
    } else {
        $(this).children('.video-white-overlay').fadeOut(200);
        video.pause();
    }
});
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
    .to('.welcome-line:nth-child(4)', 1, {
        y: -60,
        opacity: 0
    }, "start").to('.welcome-line', 1, {
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

/*showreel animation*/

const showreelTl = new TimelineMax({
    repeat: -1,
    repeatDelay: 2
});

showreelTl.add("middle", 0.75).add("end", 2.5).fromTo('.particle', 0.30, {
    y: -50,
    x: 250,
    ease: Expo.easeIn
}, {
    y: -50,
    x: -250,
}).fromTo('.particle', 0.30, {
    y: 50,
    x: -250,
    ease: Expo.easeIn
}, {
    y: 50,
    x: 250
}).fromTo('.particle', 0.20, {
    y: 0,
    x: 200
}, {
    y: 0,
    x: 95,
    ease: Expo.easeOut
}, "middle").fromTo('.particle', 0.75, {
    y: 0,
    rotation: 0
}, {
    y: 150,
    rotation: 220,
    ease: Power4.easeIn
}, "end");

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

//video setup
