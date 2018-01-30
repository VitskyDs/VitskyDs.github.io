$(document).ready(function () {

    setTimeout(function () {
        $('.loader').fadeOut(300);
        $('.loader-wrapper').fadeOut(800);
    }, 4000);

    if (localStorage.getItem('firstEntry') === 'true') {
        $('#welcome-screen').remove();
    };
    if (localStorage.getItem('firstInformationEntry') === 'true') {
        $('.about-indicator').remove();
    };
});


const bounds = [[-3.74200, 40.39900], [-3.66800, 40.44800]];

mapboxgl.accessToken = 'pk.eyJ1Ijoidml0c2t5ZHMiLCJhIjoiOFZwQU50MCJ9.VyMMFpXAN7S8S1M0ryW1mQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vitskyds/cjckaz39y9xqm2rqidzl9wj70',
    center: [-3.704026, 40.426931],
    zoom: 13,
    maxZoom: 15,
    minZoom: 13,
    maxBounds: bounds
});

const iconSize = [10, 10];

const plazas = {
    "type": "FeatureCollection",
    "features": [{
            "type": "Feature",
            "properties": {
                type: "plaza",
                "message": "Plaza del Dos de Mayo",
                "alt": "plaza-del-dos-de-mayo",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.7041000, 40.4270088]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "plaza",
                "message": "Plaza de San Ildefonso",
                "alt": "plaza-de-san-ildefonso",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.7020050, 40.4241419]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "plaza",
                "message": "Plaza de Santa Maria Soledad",
                "alt": "plaza-de-santa-maria-soledad",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.705340, 40.421559]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "plaza",
                "message": "Plaza del Rey",
                "alt": "plaza-del-rey",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.696077, 40.420224]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "plaza",
                "message": "Plaza Santo Domingo",
                "alt": "plaza-santo-domingo",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.708438, 40.420104]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "plaza",
                "message": "Plaza Biombo",
                "alt": "plaza-biombo",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.7110, 40.41590]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "plaza",
                "message": "Plaza Puerta del Sol",
                "alt": "plaza-puerta-del-sol",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.7035000, 40.4167319]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "plaza",
                "message": "Plaza del Conde del Valle de Suchil",
                "alt": "valle-de-suchil",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.70730, 40.43101505]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "plaza",
                "message": "Plaza de Olavide",
                "alt": "plaza-de-olavide",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.701071, 40.432755]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "plaza",
                "message": "Plaza Mayor",
                "alt": "plaza-mayor",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.7075000, 40.4153774]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "poi",
                "message": "Marques de Santa Ana 6",
                "alt": "marquez-de-santa-ana",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.7051000, 40.424200]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "poi",
                "message": "Noviciado / Plaza de Espana",
                "alt": "noviciado-plaza-de-espana",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.709107, 40.424399]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "poi",
                "message": "Torres de Collon",
                "alt": "torres-de-collon",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.696500, 40.428000]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "poi",
                "message": "Bilbao",
                "alt": "bilbao",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.701999, 40.429054]
            }
            }, {
            "type": "Feature",
            "properties": {
                type: "poi",
                "message": "Calle Velarde",
                "alt": "calle-velarde",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.702748, 40.426812]
            }
        },
        {
            "type": "Feature",
            "properties": {
                type: "poi",
                "message": "Parroquia Buen Suceso",
                "alt": "parroquia-buen-suceso",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.715777, 40.429492]
            }
        },
        {
            "type": "Feature",
            "properties": {
                type: "poi",
                "message": "Biblioteca Iván de Vargas",
                "alt": "biblioteca-ivan-de-vargas",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.709690, 40.414145]
            }
        },
        {
            "type": "Feature",
            "properties": {
                type: "poi",
                "message": "Ciudad Universitaria",
                "alt": "noviciado-plaza-de-espana",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.726100, 40.443926]
            }
        },
        {
            "type": "Feature",
            "properties": {
                type: "poi",
                "message": "Universidad Politécnica de Madrid",
                "alt": "universidad-politecnica-de-madrid",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.731220, 40.440298]
            }
        },
        {
            "type": "Feature",
            "properties": {
                type: "plaza",
                "message": "Plaza de Chueca",
                "alt": "plaza-de-chueca",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.697590, 40.422769]
            }
        },
        {
            "type": "Feature",
            "properties": {
                type: "poi",
                "message": "אנשי המדרגה",
                "alt": "stair-people",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.705657, 40.424660]
            }
        }]
};

// add markers to map
plazas.features.forEach(function (marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(images/icons/' + marker.properties.type + '.svg)';
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';
    el.setAttribute("alt", marker.properties.message);
    el.setAttribute("data", marker.properties.alt);
    // add marker
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});

//hover on marker
$('.marker').on('mouseenter', function () {
    const alt = $(this).attr('alt');
    $('#map').append(`<div class="tooltip">${alt}</div>`);
});

$('.marker').on('mouseleave', function () {
    $('.tooltip').remove();
});

/*collapse map*/
$('.arrow-wrapper').click(function () {
    $('.map-container').toggleClass('map-close');
});
/*open relevant article*/

//close map and open relevant article
$('.fire-article').click(function () {
    $('.map-container').addClass('map-close');
    $('article').fadeOut(0);
    const article = "#" + $(this).attr('alt');
    $(article).css("display", "grid");
});
//open article on click on marker
$('.marker').click(function () {
    $('.map-container').addClass('map-close');
    $('article').fadeOut(0);
    const article = "#" + $(this).attr('data');
    $(article).fadeIn(0);
});

//open about
$('#about-button').click(function () {
    $('.about').css('display', 'grid');
    $('.about-indicator').remove();
    localStorage.setItem('firstInformationEntry', 'true');
});

//close about
$('#close-about').click(function () {
    $('.about').fadeOut(300);
});

//close welcome screen
$('#welcome-close').click(function () {
    $('#welcome-screen').fadeOut(300);
    localStorage.setItem('firstEntry', 'true');
});
