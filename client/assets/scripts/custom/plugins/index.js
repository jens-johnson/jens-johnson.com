import circleProgress from './circleProgress';
import fancyBox from './fancybox';
import isotope from './isotope';
import mixitup from './mixitup';
import owl from './owl';
import wow from './wow';

function init() {
  [
    circleProgress,
    fancyBox,
    isotope,
    mixitup,
    owl,
    wow
  ].forEach(plugin => plugin.configure());
}

export default init;
