// import Rx from 'rxjs/Rx';
import { images } from './debug.js';
import ContainerDimensions from './container-dimensions.js';
import Options from './options.js';
type ContainerType = HTMLCanvasElement;

const Tate = function(container: ContainerType, options = {}) {
  if (!(container instanceof HTMLElement)) {
    throw new Error(`${container} is not a HTML element`)
  }
  const getDimensions = ContainerDimensions(implicitDimensions(container));
  const getOptions = Options(options);
}

type Ratio = {
  width: number,
  height: number
}

const implicitDimensions = (container: ContainerType) => {
  return {
    width: container.clientWidth,
    height: container.clientHeight
  }
}

/* 
// these are things that are set and don't change
const egOptions = {
  lowresImages: {},
  hiresImages: {},
  container: 'dom element',
  ctx: 'canvas',
  layout: ['default', 'complex', 'simple'],
  ratio: 'eg 18:9'
}

// these can change, and will update the 
const egState = {
  carouselIs: ['open', 'closed'],
}

const egCarouselState = {
  activeSlide: 'dom element or id'
} 
*/

export default Tate;