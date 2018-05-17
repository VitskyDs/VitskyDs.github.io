mapboxgl.accessToken = 'pk.eyJ1Ijoidml0c2t5ZHMiLCJhIjoiOFZwQU50MCJ9.VyMMFpXAN7S8S1M0ryW1mQ';
var mapMobile = new mapboxgl.Map({
    container: 'map-mobile',
    style: 'mapbox://styles/vitskyds/cjhageykl1c4u2splo0dl438i',
    zoom: 16.5,
    center: [34.77225, 32.06487]
});


mapMobile.on("load", function () {
  /* Image: An image is loaded and added to the map. */
  mapMobile.loadImage("../images/icons/custom-marker.png", function(error, image) {
      if (error) throw error;
      mapMobile.addImage("custom-marker", image);
      /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
      mapMobile.addLayer({
        id: "markers",
        type: "symbol",
        /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features:[{"type":"Feature","geometry":{"type":"Point","coordinates":["34.77225","32.06487"]}}]}
        },
        layout: {
          "icon-image": "custom-marker",
        }
      });
    });
});

var mapTablet = new mapboxgl.Map({
    container: 'map-tablet',
    style: 'mapbox://styles/vitskyds/cjhageykl1c4u2splo0dl438i',
    zoom: 16.5,
    center: [34.77225, 32.06487]
});


mapTablet.on("load", function () {
  /* Image: An image is loaded and added to the map. */
  mapTablet.loadImage("../images/icons/custom-marker.png", function(error, image) {
      if (error) throw error;
      mapTablet.addImage("custom-marker", image);
      /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
      mapTablet.addLayer({
        id: "markers",
        type: "symbol",
        /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features:[{"type":"Feature","geometry":{"type":"Point","coordinates":["34.77225","32.06487"]}}]}
        },
        layout: {
          "icon-image": "custom-marker",
        }
      });
    });
});
