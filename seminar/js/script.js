mapboxgl.accessToken = 'pk.eyJ1Ijoidml0c2t5ZHMiLCJhIjoiOFZwQU50MCJ9.VyMMFpXAN7S8S1M0ryW1mQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vitskyds/cjckaz39y9xqm2rqidzl9wj70',
    center: [-3.704026, 40.426931],
    zoom: 13
});

const iconSize = [10, 10];

const plazas = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            type: "plaza",
            "message": "Plaza del Dos de Mayo",
            "iconSize": [iconSize[0], iconSize[1]]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-3.7061988, 40.4270088]
        }
            }, {
        "type": "Feature",
        "properties": {
            type: "plaza",
            "message": "Plaza de San Ildefonso",
            "iconSize": [iconSize[0], iconSize[1]]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-3.7043586, 40.4240419]
        }
            }, {
        "type": "Feature",
        "properties": {
            type: "plaza",
            "message": "Plaza de Santa Maria Soledad",
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
            "iconSize": [iconSize[0], iconSize[1]]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-3.7055274, 40.4167319]
        }
            }, {
        "type": "Feature",
        "properties": {
            type: "plaza",
            "message": "Plaza del Conde del Valle de Suchil",
            "iconSize": [iconSize[0], iconSize[1]]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-3.709479, 40.4315505]
        }
            }, {
        "type": "Feature",
        "properties": {
            type: "plaza",
            "message": "Plaza de Olavide",
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
            "iconSize": [iconSize[0], iconSize[1]]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-3.7082803, 40.4153774]
        }
            }, {
        "type": "Feature",
        "properties": {
            type: "poi",
            "message": "Marques de Santa Ana 6",
            "iconSize": [iconSize[0], iconSize[1]]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-3.7058363, 40.424207]
        }
            }, {
        "type": "Feature",
        "properties": {
            type: "poi",
            "message": "Noviciado / Plaza de Espana",
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
            "iconSize": [iconSize[0], iconSize[1]]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-3.6931974, 40.4257586]
        }
            }, {
        "type": "Feature",
        "properties": {
            type: "poi",
            "message": "Bilbao",
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
            "iconSize": [iconSize[0], iconSize[1]]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-3.702748, 40.426812]
        }
    }]
};

// add markers to map
plazas.features.forEach(function (marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(images/' + marker.properties.type + '.svg)';
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';
    el.setAttribute("alt", marker.properties.message);
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

/*
$('.marker').on('mouseenter', function () {
    $(map).append(`<div class="tooltip" style="top:${event.clientY} left:${event.clientX}">hello</div>`);
});
*/
$('.marker').hover(function () {
    const alt = $(this).attr('alt');
    $('#map').append(`<div class="tooltip">${alt}</div>`);
    $('.tooltip').css("top", event.clientY - 25);
    $('.tooltip').css("left", event.clientX);

});

$('.marker').on('mouseleave', function () {
    $('.tooltip').remove();
});
