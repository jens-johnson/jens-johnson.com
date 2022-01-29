import mapConfig from './map_config.json';

/**
 * Creates Google Map element when loaded
 */
function buildMap() {
  const map = new window.google.maps.Map(document.getElementById('mh-map'), {
    zoom: mapConfig.settings.zoom,
    scrollwheel: false,
    navigationControl: false,
    center: mapConfig.settings.location,
    styles: mapConfig.styles.light
  });
  const marker = new window.google.maps.Marker({
    position: mapConfig.settings.location,
    title: "Denver, Colorado"
  });
  marker.setMap(map);
}

/**
 * Binds event listeners
 */
function bindEventListeners() {
  if (window.google) {
    window.google.maps.event.addDomListener(window, 'load', buildMap);
  } else {
    document.getElementById('google-maps-script').addEventListener('load', () => {
      window.google.maps.event.addDomListener(window, 'load', buildMap);
    });
  }
}

/**
 * Initializes Google Maps listeners and elements
 */
function init() {
  bindEventListeners();
}

export default init;
