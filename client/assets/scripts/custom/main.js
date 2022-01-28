import initGoogleMaps from './googleMaps';
import initNavigation from './navigation';
import initPlugins from './plugins';
import initScrolling from './scrolling';

function loadScripts() {
  initPlugins();
  initNavigation();
  initScrolling();
  initGoogleMaps();
}

$(document).ready(loadScripts);