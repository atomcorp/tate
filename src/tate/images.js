// @flow

type nodeListType = NodeList<HTMLImageElement>;
type objectListType = {
  index: {
    loRes: string,
    hiRes: string,
    title: string,
    index: number
  }
}

const Images = (imageList: nodeListType | objectListType) => {
  // everything in 
  if (!(imageList instanceof NodeList)) {
    return validateObjectList(imageList)
  }
  if (imageList instanceof NodeList) {
    return handleNodeList(imageList);
  }
  // check if nodeList or object of arrays
  throw Error('Invalid image list past to Images()')
}

export const handleNodeList = (
  children: nodeListType
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
        image.getAttribute('data-tate-hires'), 
        image.title, index
      )
    )
  );
}

const validateImage = (image) => {
  if (!image instanceof HTMLImageElement) {
    throw new Error(`Non <img /> element included`);
  }
  if (!image.getAttribute('data-tate-hires')) {
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
      title: title,
      id: index
    }
  }
}

const validateObjectList = (imageObject: objectListType) => {
  const imageKeys = Object.keys(imageObject);
  if (imageKeys.length < 2) {
    throw Error('You need at least 2 images');
  }
  // ensure imageObject matches correct format, else throw error
  imageKeys.forEach((key) => {
    if (!imageObject[key].hasOwnProperty('loRes')) {
      throw Error('Image objects need loRes property');
    }
    if (!imageObject[key].hasOwnProperty('hiRes')) {
      throw Error('Image objects need hiRes property');
    }
  });
  return imageObject;
}

export default Images;