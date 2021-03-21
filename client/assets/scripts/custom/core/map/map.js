import * as map_config from './map_config.json';

const loadMap = () => {
  const mapConfig = {
    zoom: map_config.settings.zoom,
    scrollwheel: false, 
    navigationControl: false,
    center: map_config.settings.location,
    styles: map_config.styles.light
  }
  const map = new google.maps.Map(document.getElementById('mh-map'), mapConfig);
  const marker = new google.maps.Marker({
    position: map_config.settings.location,
    title: "Portland, Oregon"
  });
  marker.setMap(map);
}

const initMap = () => {
  if (window.google) {
    window.google.maps.event.addDomListener(window, 'load', loadMap);
  } else {
    document.getElementById('google-maps-script').addEventListener('load', () => {
      window.google.maps.event.addDomListener(window, 'load', loadMap);
    });
  }
}

export default initMap;
