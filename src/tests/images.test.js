import Images, {
  containerChildren
} from '../tate/images.js';

import {images} from '../tate/debug.js';

const imageListToPassIn = [
  'http://fillmurray.com/200/300',
  'http://fillmurray.com/201/301',
  'http://fillmurray.com/190/320'
];

const generateImgs = (sources) => {
  return sources.map((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.setAttribute('data-tate-hires', src);
    img.title = `title${i}`
    return img;
  }) 
}

const generateNodelist = (imgs) => {
  const div = document.createElement('img');
  div.classList.add('tate');
  imgs.forEach((img) => {
    div.appendChild(img);
  });
  return div.childNodes;
}

const imgs = generateNodelist(generateImgs(imageListToPassIn));

test('turn nodelist of images into obj', () => {
  
  expect(Images(imgs)).toEqual({
    "0": {
      loRes: imageListToPassIn[0],
      hiRes: imageListToPassIn[0],
      title: 'title0',
      id: 0
    },
    "1": {
      loRes: imageListToPassIn[1],
      hiRes: imageListToPassIn[1],
      title: 'title1',
      id: 1
    },
    "2": {
      loRes: imageListToPassIn[2],
      hiRes: imageListToPassIn[2],
      title: 'title2',
      id: 2
    }
  })
});
