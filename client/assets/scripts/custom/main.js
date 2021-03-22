import { initLoaders, initNav, initContact, initMap } from './core';

const LeftAndRightArrows = ["<svg class='svg-inline--fa fa-angle-left'></svg>", "<svg class='svg-inline--fa fa-angle-right'></svg>"]

$(document).ready(() => {
  initLoaders();
  initMap();
  initNav();
  initContact();
});
