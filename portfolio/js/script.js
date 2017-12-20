$(document).ready(function () {

    const mainContent = $('main'),
        header = $('.header'),
        menuButton = $('.menu-button'),
        mobileMenu = $('.mobile-menu');

    /*Initialize Flickity Carousels*/

    $('.main-carousel').flickity({
        // options
        cellAlign: 'center',
        contain: true,
        imagesLoaded: true,
        setGallerySize: true,
        prevNextButtons: false,
        pageDots: false
    });

    const cellButtonGroup = $('.cell-button-group');

    //update button on change slide
    $('.main-carousel').on('select.flickity', function () {
        const cellButtons = $(this).parent('.section-carousel').next().find('.button');
        const flkty = $(this).data('flickity');
        const caption = $(this).parent('.section-carousel').find('.caption');
        caption.text(flkty.selectedElement.alt);

        cellButtons.filter('.is-selected')
            .removeClass('is-selected');
        cellButtons.eq(flkty.selectedIndex)
            .addClass('is-selected');

    });

    // select cell on button click
    cellButtonGroup.on('click', '.button', function () {
        const carousel = $(this).parent('.section-carousel-buttons').prev().find('.main-carousel');
        var index = $(this).index();
        carousel.flickity('select', index);
    });
    // previous
    $('.carousel-button-prev').on('click', function () {
        $(this).parents('.section-carousel-buttons').prev().find('.main-carousel').flickity('previous');
    });
    // next
    $('.carousel-button-next').on('click', function () {
        $(this).parents('.section-carousel-buttons').prev().find('.main-carousel').flickity('next');
    });

    /*Menu*/
    menuButton.click(function () {
        mobileMenu.toggleClass('hide-menu');
        mobileMenu.toggleClass('menu-closed');
        mainContent.toggleClass('desaturate-blur');
        $('.header').find('path').toggleClass('path-fill-white');
    });

    /*Welcome Animation*/
    var welcomeTl = new TimelineMax();
    welcomeTl.addLabel("start", "0")
        .from('.container', 0.6, {
            y: 30,
            opacity: 0
        }, "start+=0.5")
        .from('.intro', 0.6, {
            y: 60
        }, "start+=0.3");

    /*Video Controls*/

    $('.video-container').click(function () {
        const video = $(this).find('video').get(0);
        if (video.paused) {
            $(this).children('.video-button-title').fadeToggle(200);
            video.play();
        } else {
            $(this).children('.video-button-title').fadeToggle(200);
            video.pause();
        }
    });

    /*svg morph*/

});
