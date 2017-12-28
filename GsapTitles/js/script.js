/*Var declaration*/
const btnPrev = $('.video-controls-prev-button'),
    btnNext = $('.video-controls-next-button'),
    btnPlay = $('.video-controls-play-button'),
    btnControls = $('.video-controls'),
    btnAdd = $('.title-add'),
    video = document.getElementById('video');

let theme = $('.chosen-theme').attr('id'),
    currentTitle = ".opener-01-target",
    timeline = "";

const animUnits = [0.15, 0.2, 0.35, 0.5, 0.75, 1, 1.25, 2];


//delay function

TimelineLite.prototype.addDelay = function (delay, position) {
    var delayAttr;
    if (typeof delay === 'undefined' || isNaN(delay)) {
        return this; //skip if invalid parameters
    }
    if (typeof position === 'undefined') {
        delayAttr = '+=' + delay; //add delay at the end of the timeline
    } else if (typeof position === 'string') {
        delayAttr = position + '+=' + delay; //add delay after label
    } else if (!isNaN(position)) {
        delayAttr = delay + position; //if they're both numbers, assume absolute position
    } else {
        return this; //nothing done
    }
    return this.set({}, {}, delayAttr);
};

/*Sidebar*/
//Change theme
$('.sidebar-style-item').click(function () {
    $('.sidebar-style-item').removeClass('chosen-theme');
    $(this).addClass('chosen-theme');
    theme = $('.chosen-theme').attr('id');
    $('.title-container').children().removeClass();
    $('.title-container').children().addClass(theme);
});

/* Video Controls*/

btnPlay.click(function () {
    if (timeline === "") {
        video.paused ? video.play() : video.pause();
        rectopenertl.paused ? rectopenertl.play() : rectopenertl.pause();
    } else {
        video.paused ? video.play() : video.pause();
        timeline.paused ? timeline.play() : timeline.pause();
    }
});

btnPrev.click(function () {
    if (timeline === "") {
        video.paused ? video.play() : video.pause();
        rectopenertl.progress(0);
    } else {
        timeline.progress(0);
        timeline.paused ? timeline.play() : timeline.pause();
    }
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

/*Reset all timeline*/
const resetAllTl = function () {
    rectopenertl.progress(0);
    rectopenertl.pause();
};

/*Rectangular Theme*/
const rectopenertl = new TimelineMax({
        paused: true
    }),
    rectsupertl = new TimelineMax({
        paused: true
    }),
    recttxtlisttl = new TimelineMax({
        paused: true
    }),
    rectclosertl = new TimelineMax({
        paused: true
    });

rectopenertl.add("start", 0).add("titles", 0.25)
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

rectsupertl.add("start", 0.5).add("end", 5.3)
    .to('.super-flah', 0, {
        className: '+=revealLeftRight'
    }, "start")
    .from('.super-particle', animUnits[2], {
        x: -1200,
        ease: Power0.easeNone,
        rotation: -360
    }, "start")
    .to('.super-particle', animUnits[4], {
        ease: Sine.easeOut,
        rotation: 405
    })
    .to('.super-particle', animUnits[5], {
        ease: Sine.easeInOut,
        y: 300,
        rotation: 700
    }, "end");

recttxtlisttl.add("start", 0.5).add("end", 6)
    .staggerFrom('.list-item', animUnits[3], {
        css: {
            ease: Sine.easeOut,
            clip: "rect(0px, 0px, 200px, 0px)"
        }
    }, 0.25, "start")
    .staggerFrom('.list-item-bullet', animUnits[7], {
        ease: Sine.easeOut,
        rotation: -360
    }, 0.25, "start-=0.5");

rectclosertl.add("start", 0.5)
    .from('.closer-bg', animUnits[4], {
        ease: Sine.easeOut,
        x: -1920
    }, "start")
    .from('.closer-particle', animUnits[7], {
        ease: Sine.easeOut,
        x: -1920,
        rotation: 360
    }, "start")
    .from('.closer-flah', animUnits[6], {
        css: {
            ease: Sine.easeOut,
            clip: "rect(0px, 0px, 200px, 0px)"
        }
    }, "start");

/* Circle Theme*/
const circThemeTl = new TimelineMax({
    paused: true
});

/*Timeline*/
/*Listen to change of Title*/

$('.timeline').on('click', '.title-wrapper', function () {
    const string = $(this).attr('class');
    currentTitle = "." + string.substr(0, string.indexOf(' '));
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
    //const currentVideo = string.substr(0, string.indexOf('-'));
    video.setAttribute('src', 'images/video/' + currentTitle.substr(1, currentTitle.indexOf('-') - 1) + '.mp4');
    //change title contents
    timeline = theme + currentTitle.substr(1, currentTitle.indexOf('-') - 1) + 'tl';
    timeline = eval(timeline);
});
