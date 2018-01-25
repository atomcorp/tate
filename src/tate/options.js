/* 

  Options

  Set default options if they haven't been specified

*/

// import * as R from 'ramda';

type OptionsType = {

} 

// keep this upto date so it can be tested
export const defaultLayout = {layout: '3:2'};
export const defaultRatio = {ratio: 'default'};

const Options = (options: OptionsType = {}) => {
  return hasLayout(hasRatio(options));
}

const hasRatio = (options: OptionsType) => {
  if (!options.ratio) {
    return Object.assign({}, defaultRatio, options);
  }
  return options;
}

const hasLayout = (options: OptionsType) => {
  if (!options.layout) {
    return Object.assign({}, defaultLayout, options);
  }
  return options;
}

export default Options;