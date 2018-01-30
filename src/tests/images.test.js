import Images, {
  containerChildren
} from '../tate/images.js';

import {images} from '../tate/debug.js';

const imageListToPassIn = {
  hires: ['/hi-res/img1.jpg', '/hi-res/img2.jpg'],
  loRes: ['/lo-res/img1.jpg', '/lo-res/img2.jpg']
}

const imageListToReturn = {
  hires: {
    
  }
}

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
