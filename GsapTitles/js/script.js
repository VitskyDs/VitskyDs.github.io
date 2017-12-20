/*Var declaration*/
const btnPrev = $('.video-controls-prev-button'),
    btnNext = $('.video-controls-next-button'),
    btnPlay = $('.video-controls-play-button'),
    btnControls = $('.video-controls'),
    btnAdd = $('.title-add'),
    video = document.getElementById('video');

const animUnits = [0.15, 0.2, 0.35, 0.5, 0.75, 1, 1.25];

/*Sidebar*/


/* Video Controls*/

btnPlay.click(function () {
    video.paused ? video.play() : video.pause();
    rectOpenerTl.paused ? rectOpenerTl.play() : rectOpenerTl.pause();
});

btnPrev.click(function () {
    rectOpenerTl.progress(0);
});

/*Change content with sidebar content*/

$('input').keyup(function () {
    const title = "." + $(this).attr("id");
    $(title).text($(this).val());
});


/*Add a title*/
$('.timeline').on('click', '.title-add', function () {
    $('.title-add-menu-wrapper').toggleClass('display-none');
});

$('.title-add-item').click(function () {
    $('.title-options').addClass('display-none');
    // add content title-super-3 or title-list-2 and replace title-wrapper
    if ($(this).hasClass('title-super-3')) {
        $(`<div id="super-3-wrapper" class="title-options"><div class="sidebar-panel-heading sidebar-panel-title">Lower Third</div><div class="sidebar-panel-heading"><div class="panel-icon panel-icon-title"></div><div class="panel-heading">Titles</div></div><div class="sidebar-panel-content"><div class="sidebar-text-field"><div class="label small">First line</div><div class="input-wrapper"><input type="text" maxlength="25" placeholder="First name, Headline, etc." class="text-input text-input-super"><div class="input-char-counter">25</div></div></div></div><div class="sidebar-panel-heading"><div class="panel-icon panel-icon-style"></div><div class="sidebar-panel-heading"><div class="panel-icon panel-icon-duration"></div><div class="panel-heading">Duration</div></div><div class="sidebar-panel-content"><input type="range" min="3" max="10" step="0.5"></div></div>`).insertAfter('#super-2-wrapper');
        $('.title-add').replaceWith(`<div class="title-wrapper title-super-3 title-wrapper-active">< /div>`);
    } else {
        $(`<div id="list-2-wrapper" class="title-options"><div class="sidebar-panel-heading sidebar-panel-title">List</div><div class="sidebar-panel-heading"><div class="panel-icon panel-icon-title"></div><div class="panel-heading">Titles</div></div><div class="sidebar-panel-content"><div class="sidebar-text-field"><div class="label small">First item</div><div class="input-wrapper"><input type="text" maxlength="25" placeholder="First name, Headline, etc." class="text-input text-input-super"><div class="input-char-counter">25</div></div></div><div class="sidebar-text-field"><div class="label small">Second item</div><div class="input-wrapper"><input type="text" maxlength="25" placeholder="Last name, Desctiption, etc." class="text-input text-input-super"><div class="input-char-counter">25</div></div></div><div class="sidebar-text-field"><div class="label small">Third item</div><div class="input-wrapper"><input type="text" maxlength="25" placeholder="First name, Headline, etc." class="text-input text-input-super"><div class="input-char-counter">25</div></div></div><div class="sidebar-text-field"><div class="label small">Fourth item</div><div class="input-wrapper"><input type="text" maxlength="25" placeholder="Last name, Desctiption, etc." class="text-input text-input-super"><div class="input-char-counter">25</div></div></div><div class="sidebar-text-field"><div class="label small">Fifth item</div><div class="input-wrapper"><input type="text" maxlength="25" placeholder="First name, Headline, etc." class="text-input text-input-super"><div class="input-char-counter">25</div></div></div></div><div class="sidebar-panel-heading"><div class="panel-icon panel-icon-style"></div><div class="sidebar-panel-heading"><div class="panel-icon panel-icon-duration"></div><div class="panel-heading">Duration</div></div><div class="sidebar-panel-content"><input type="range" min="3" max="10" step="0.5"></div></div>`).insertAfter('#super-2-wrapper');
        $('.title-add').replaceWith(`<div class="title-wrapper title-list-2 title-wrapper-active"></div>`);
    }
});


/*Animations*/
const resetAllTl = function () {
    rectOpenerTl.progress(0);
    rectOpenerTl.pause();
};

/*Rectangular Theme*/
const rectOpenerTl = new TimelineMax({
    paused: true
});

const rectSuperTl = new TimelineMax({
    paused: true
});

rectOpenerTl.add("start", 0).add("titles", 0.25)
    .staggerFrom('.opener-particle:nth-child(4),.opener-particle:nth-child(5),.opener-particle:nth-child(6),.opener-particle:nth-child(7)', animUnits[2], {
        ease: Power0.easeNone,
        x: -2250,
        rotation: -360
    }, 0.15, "start")
    .from('.opener-particle:nth-child(8), .opener-particle:nth-child(9)', animUnits[5], {
        ease: Power4.easeOut,
        x: -2250,
    }, "start+=0.7")
    .from('.opener-particle:nth-child(8), .opener-particle:nth-child(9)', 4, {
        ease: Power4.easeOut,
        rotation: -980
    }, "start+=0.9")
    .from('.opener-text-1', animUnits[3], {
        ease: Expo.easeOut,
        y: 300
    }, "titles")
    .from('.opener-text-2', animUnits[3], {
        ease: Expo.easeOut,
        y: -300
    }, "titles");

rectSuperTl.add("start", 0);

/* Circle Theme*/

const circThemeTl = new TimelineMax({
    paused: true
});

/*Timeline*/
/*Listen to change of Title*/
//

$('.timeline').on('click', '.title-wrapper', function () {
    let string = $(this).attr('class');
    const currentTitle = "." + string.substr(0, string.indexOf(' '));
    //restart animation
    resetAllTl();
    //close title-add-menu
    $('.title-add-menu-wrapper').addClass('display-none');
    //manipulate timeline div
    $('.title-wrapper').removeClass('title-wrapper-active');
    $(this).addClass('title-wrapper-active');
    // manipulate sidebar
    $('.title-displayNone-target').addClass('display-none');
    $(currentTitle).removeClass('display-none');
    // change video contents

});
