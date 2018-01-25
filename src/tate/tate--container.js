/* 

  Container

  Work out container size
  Returns width amd height

*/


type Dimensions = {
  width: number,
  height: number
}

type Options = {};

const container = (
  containersImplicitDimensions: Dimensions, 
  options: Size = {},
  ratio: string = "3:2"
) => {
  const defaultDimensions = containersImplicitDimensions; 
  const dimensionsIfRatio = calculateDimensionIfRatio(
    containersImplicitDimensions, 
    breakApartRatio(ratio)
  );

  return dimensionsIfRatio;
}


// Only calulates height
export const calculateDimensionIfRatio = (
  dimensions: Dimensions, 
  ratio: Dimensions
) => {
  return {
    width: Math.round(dimensions.width),
    height: Math.round(dimensions.width * (ratio.height / ratio.width))
  }
}

export const breakApartRatio = (ratio: string) => {
  const ratioArr = ratio.split(':').map((value, index) => {
    if (index > 2 || !Number(value)) {
      throw new Error(`${ratio}'s an Invalid ratio format, try eg. "18:9"`)
    }
    return Number(value);
  });
  return {
    width: ratioArr[0],
    height: ratioArr[1]
  }
}

export default container;