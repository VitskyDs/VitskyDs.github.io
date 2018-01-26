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
                "coordinates": [-3.6985204, 40.4200411]
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
                "coordinates": [-3.7108549, 40.4205315]
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
                "coordinates": [-3.713778, 40.4159668]
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
                "alt": "plaza-del-conde-del-calle-de-suchil",
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
                "coordinates": [-3.7043703, 40.4290584]
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
                "message": "ETSAM",
                "alt": "noviciado-plaza-de-espana",
                "iconSize": [iconSize[0], iconSize[1]]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-3.7311324, 40.4397832]
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

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mouseenter', '.marker', function (e) {

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(e.features[0].geometry.coordinates)
        .setHTML($(this).attr('alt'))
        .addTo(map);
});

map.on('mouseleave', '.marker', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

$('.marker').hover(function () {
    const alt = $(this).attr('alt');
    $('#map').append(`<div class="tooltip">${alt}</div>`);
    $('.tooltip').css("top", event.clientY - 30);
    $('.tooltip').css("left", event.clientX);

});

$('.marker').on('mouseleave', function () {
    $('.tooltip').remove();
});

/*collapse map*/
$('.arrow-clickable-area').click(function () {
    $('.map-container').toggleClass('map-close');
});
/*open relevant article*/
//open index
$('.toggle-index').click(function () {
    $('.index').fadeToggle(0);
});
//close map and open relevant article
$('.fire-article').click(function () {
    $('.map-container').addClass('map-close');
    $('article').fadeOut(0);
    const article = "#" + $(this).attr('alt');
    $(article).fadeIn(0);
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
    $('.about').css('display', 'grid')
});

//close about
$('#close-about').click(function () {
    $('.about').fadeOut(300);
});
