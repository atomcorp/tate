import Images, {
  containerChildren
} from '../tate/images.js';

import {images} from '../tate/debug.js';

const generateImgs = (sources) => {
  return sources.map((src) => {
    const img = document.createElement('img');
    img.src = src;
    return img;
  }) 
}

test('turn nodelist of images into obj', () => {
  const imgs = generateImgs(images);
  
  expect(containerChildren(imgs.slice(0,2))).toEqual({
    "0": {
      url: imgs[0].src,
      title: ""
    },
    "1": {
      url: imgs[1].src,
      title: ""
    }
  })
});