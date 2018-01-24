import Rx from 'rxjs/Rx';

const Tate = function(options) {
  return options;
}



// these are things that are set and don't change
const egOptions = {
  lowresImages: {},
  hiresImages: {},
  container: 'dom element',
  ctx: 'canvas',
  layout: ['default', 'complex', 'simple'],
  ratio: 'eg 18:9'
};

// these can change, and will update the 
const egState = {
  carouselIs: ['open', 'closed'],
}

const egCarouselState = {
  activeSlide: 'dom element or id'
}

