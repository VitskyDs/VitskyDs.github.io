const mobileMenu = $('.mobile-menu');

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
        $('main').toggleClass('desaturate-blur');
        $('.header').find('path').toggleClass('path-fill-white');
        $('body').toggleClass('position-fixed');
    }
    //toggles menu
$('body').on('click touchstart', '.menu-button', function () {
    toggleMenu();
});
mobileMenu.on('click touchstart', 'a', function () {
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
const welcomeLinesTl = new TimelineMax();
welcomeLinesTl.add("start", 0.5).staggerFrom('.welcome-line', 0.5, {
    y: 50,
    opacity: 0,
    ease: Power3.easeOut
}, 0.1);
