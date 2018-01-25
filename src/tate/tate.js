// import Rx from 'rxjs/Rx';
import { images } from './debug.js';
import ContainerDimensions from './container-dimensions.js';
type ContainerType = HTMLCanvasElement;


const Tate = function(container: ContainerType, options = {}) {
  if (!(container instanceof HTMLCanvasElement)) {
    throw new Error(`${container} is not a Canvas element`)
  }
  const getDimensions = ContainerDimensions(implicitDimensions(container));
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

export default Tate;