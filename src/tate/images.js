// @flow

type containerType = NodeList<HTMLImageElement>;
// eg start with
// const imageListToPassIn = {
//   hires: ['/hi-res/img1.jpg', '/hi-res/img2.jpg'],
//   loRes: ['/lo-res/img1.jpg', '/lo-res/img2.jpg']
// }

const Images = (imageNodes: containerType) => {
  // check if html container or object of arrays
  return containerChildren(imageNodes);
}

export const containerChildren = (
  children: containerType
) => {
  return Array.from(children).reduce((acc, image, index) => {
    // check is an image and has correct data attribute
    validateImage(image);
    // check if low or high res
    return flattenMergeChildren(acc, image, index);
  }, {})
}

const flattenMergeChildren = (
  acc: {}, 
  image: HTMLImageElement, 
  index: number
) => {
  return Object.assign(
    {},
    acc,
    Object.assign(
      {},
      acc,
      imageObject(
        image.src, 
        image.dataset['tateHires'], 
        image.title, index
      )
    )
  );
}

const validateImage = (image) => {
  if (!image instanceof HTMLImageElement) {
    throw new Error(`Non <img /> element included`);
  }
  if (!image.dataset.hasOwnProperty('tateHires')) {
    throw new Error(`No hi res images`)
  }
}

// return an imageObjType
const imageObject = (
  loRes: string, 
  hiRes: string, 
  title: string, 
  index: number
) => {
  return {
    [index.toString()]: {
      loRes: loRes,
      hiRes: hiRes,
      title: title
    }
  }
}

export default Images;