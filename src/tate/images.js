// @flow

type containerType = NodeList<HTMLImageElement>;
type objectType = {
  hiRes: Array<HTMLImageElement>,
  loRes: Array<HTMLImageElement>
}
// eg start with
// const imageListToPassIn = {
//   hires: ['/hi-res/img1.jpg', '/hi-res/img2.jpg'],
//   loRes: ['/lo-res/img1.jpg', '/lo-res/img2.jpg']
// }
type imageObjType = {
  src: string,
  title: ?string
}
const Images = (container: containerType | ObjectType) => {
  // check if html container or object of arrays
  const a = containerChildren(container.children);
  console.log(a)
}

export const containerChildren = (
  children: containerType
) => {
  return Array.from(children).reduce((acc, image, index) => {
    if (!image instanceof HTMLImageElement) {
      throw new Error(`Non <img /> element included`);
    }
    if (!image.dataset.hasOwnProperty('tateHires')) {
      throw new Error(`No hi res images`)
    }
    // check if low or high res
    return Object.assign(
      {}, 
      acc, 
      {
        loRes: Object.assign(
          {}, 
          acc.loRes,
          imageObject(image.src, image.title, index)
        ),
        hiRes: Object.assign(
          {},
          acc.hiRes,
          imageObject(image.dataset['tateHires'], image.title, index)
        )
      }
    );
  }, {loRes: {}, hiRes: {}})
}

// return an imageObjType
const imageObject = (src: HTMLImageElement, title, index: number) => {
  return {
    [index.toString()]: {
      url: src,
      title: title
    }
  }
}

 

// const validateImageObject = (images: imageObjType) => {}

export default Images;