// @flow

type containerType = NodeList<HTMLImageElement>;
type imageObjType = {
  src: string,
  title: ?string
}
const Images = (container: containerType, images: string) => {
  
}

export const containerChildren = (
  children: containerType
) => {
  return Array.from(children).reduce((acc, val, index) => {
    if (!val instanceof HTMLImageElement) {
      throw new Error(`Non <img /> element included`)
    }
    return Object.assign({}, {
      [index + '']: {
        url: val.src,
        title: val.title
      }
    }, acc);
  }, {})
}

const validateImageObject = (images: imageObjType) => {
  // check there's 
}

export default Images;