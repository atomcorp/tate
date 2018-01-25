/* 

  Container Dimensions

  Work out container size
  Returns width amd height

*/

import * as helpers from '../tate/helpers.js';
const { WxH } = helpers;

type Dimensions = {
  width: number,
  height: number
}

const ContainerDimensions = (
  containersImplicitDimensions: Dimensions, 
  ratio: string = "3:2"
) => {
  return calculateDimensionWithRatio(
    containersImplicitDimensions, 
    breakApartRatio(ratio)
  );
}

// Only calulates height
export const calculateDimensionWithRatio = (
  dimensions: Dimensions, 
  ratio: string
) => {
  return WxH(
    Math.round(dimensions.width), 
    Math.round(
      dimensions.width * (ratio.height / ratio.width)
    ));
}

export const breakApartRatio = (ratio: string) => {
  const ratioArr = ratio.split(':').map((value, index) => {
    if (index > 2 || !Number(value)) {
      throw new Error(`${ratio}'s an Invalid ratio format, try eg. "18:9"`)
    }
    return Number(value);
  });
  return WxH(ratioArr[0], ratioArr[1]);
}

export default ContainerDimensions;