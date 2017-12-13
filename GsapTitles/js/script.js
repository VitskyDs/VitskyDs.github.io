/*Var declaration*/
const btnPrev = $('.video-controls-prev-button'),
    btnNext = $('.video-controls-next-button'),
    btnPlay = $('.video-controls-play-button'),
    btnControls = $('.video-controls'),
    btnAdd = $('.title-add'),
    video = document.getElementById('video');

const animUnits = [0.15, 0.2, 0.35, 0.5, 0.75, 1];
/*Sidebar*/




/* Video Controls*/

btnPlay.click(function () {
    //video.paused ? video.play() : video.pause();
    themeTl.paused ? themeTl.play() : themeTl.pause();
});

btnPrev.click(function () {
    themeTl.progress(0);
});

/*Timeline*/
/*Listen to change of Title*/
//on change: change sidebar content
//           change video
//

$('.timeline').on('click', '.title-wrapper', function () {
    var currentTitle = "#" + $(this).attr('class').slice(20) + "-wrapper";
    //manipulate timeline
    $('.title-wrapper').removeClass('title-wrapper-active');
    $(this).addClass('title-wrapper-active');
    // manipulate sidebar
    $('.title-options').addClass('display-none');
    $(currentTitle).removeClass('display-none');
    // change video contents

});

/*Add a title*/
$('.timeline').on('click', '.title-add', function () {
    $(this).find('.title-add-menu-wrapper').toggleClass('display-none');
});

$('.title-add-item').click(function () {
    $('.title-options').addClass('display-none');
    // add content title-super-3 or title-list-2 and replace title-wrapper
    if ($(this).hasClass('title-super-3')) {
        $('<div id="super-3-wrapper" class="title-options"><div class="sidebar-panel-heading"><div class="panel-icon panel-icon-title"></div><div class="panel-heading">Titles</div></div><div class="sidebar-panel-content"><div class="sidebar-text-field"><div class="label small">First line</div><div class="input-wrapper"><input type="text" maxlength="25" placeholder="First name, Headline, etc." class="text-input text-input-super"><div class="input-char-counter">25</div></div></div></div><div class="sidebar-panel-heading"><div class="panel-icon panel-icon-style"></div><div class="sidebar-panel-heading"><div class="panel-icon panel-icon-duration"></div><div class="panel-heading">Duration</div></div><div class="sidebar-panel-content"><input type="range" min="3" max="10" step="0.5"></div></div>').insertAfter('#super-2-wrapper');
        $('.title-add').replaceWith('<div class="title-wrapper title-super-3 title-wrapper-active"></div>');
    } else {
        $('<div id="list-2-wrapper" class="title-options"><div class="sidebar-panel-heading"><div class="panel-icon panel-icon-title"></div><div class="panel-heading">Titles</div></div><div class="sidebar-panel-content"><div class="sidebar-text-field"><div class="label small">First item</div><div class="input-wrapper"><input type="text" maxlength="25" placeholder="First name, Headline, etc." class="text-input text-input-super"><div class="input-char-counter">25</div></div></div><div class="sidebar-text-field"><div class="label small">Second item</div><div class="input-wrapper"><input type="text" maxlength="25" placeholder="Last name, Desctiption, etc." class="text-input text-input-super"><div class="input-char-counter">25</div></div></div><div class="sidebar-text-field"><div class="label small">Third item</div><div class="input-wrapper"><input type="text" maxlength="25" placeholder="First name, Headline, etc." class="text-input text-input-super"><div class="input-char-counter">25</div></div></div><div class="sidebar-text-field"><div class="label small">Fourth item</div><div class="input-wrapper"><input type="text" maxlength="25" placeholder="Last name, Desctiption, etc." class="text-input text-input-super"><div class="input-char-counter">25</div></div></div><div class="sidebar-text-field"><div class="label small">Fifth item</div><div class="input-wrapper"><input type="text" maxlength="25" placeholder="First name, Headline, etc." class="text-input text-input-super"><div class="input-char-counter">25</div></div></div></div><div class="sidebar-panel-heading"><div class="panel-icon panel-icon-style"></div><div class="sidebar-panel-heading"><div class="panel-icon panel-icon-duration"></div><div class="panel-heading">Duration</div></div><div class="sidebar-panel-content"><input type="range" min="3" max="10" step="0.5"></div></div>').insertAfter('#super-2-wrapper');
        $('.title-add').replaceWith('<div class="title-wrapper title-list-2 title-wrapper-active"></div>');
    }
});


/*Animations*/
const themeTl = new TimelineMax({
    paused: true
});

themeTl.add("start", 0).add("titles", 0.3)
    .staggerFrom('.opener-particle', animUnits[2], {
        ease: Power0.easeNone,
        x: -2250,
        rotation: -360
    }, 0.15)
    .from('.opener-text-1', animUnits[3], {
        ease: Expo.easeOut,
        y: 300
    }, "titles")
    .from('.opener-text-2', animUnits[3], {
        ease: Expo.easeOut,
        y: -300
    }, "titles");
