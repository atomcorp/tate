/* 

  Options

  Set default options if they haven't been specified

*/

// import * as R from 'ramda';

type OptionsType = {

} 

export const defaultOptions = () => {
  return {
    layout: '3:2',
    ratio: 'default',
    thing: ''
  }
}

// keep this upto date so it can be tested
export const defaultLayout = {layout: '3:2'};
export const defaultRatio = {ratio: 'default'};

const Options = (options: OptionsType = {}) => {
  options = {
    layout: '10:9',
    ratio: 'complex'
  }
  return mapOptions(options, defaultOptions());
  // return hasLayout(hasRatio(options));
}

const mapOptions = (options: OptionsType = {}, defaults) => {
  return Object.keys(defaults).reduce((acc, value) => {
    if (!acc[value]) {
      return Object.assign({}, {
        [value]: defaults[value]
      }, acc);
    }
    return acc;
  }, options);
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