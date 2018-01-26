// @flow
/* 

  Options

  Set default options if they haven't been specified

*/

// import * as R from 'ramda';

type OptionsType = {
  layout?: string,
  ratio?: string
}

type DefaultType = {
  layout: string,
  ratio: string
} 

export const defaultOptions = () => {
  return {
    layout: 'default',
    ratio: '3:2'
  }
}

const Options = (options: {} | OptionsType = {}) => {
  return mapOptions(options, defaultOptions());
}

const mapOptions = (
  options: {} | OptionsType = {}, 
  defaults: DefaultType
) => {
  return Object.keys(defaults).reduce((acc: {} | OptionsType, value: any) => {
    if (!acc[value]) {
      return Object.assign({}, {
        [value]: defaults[value]
      }, acc);
    }
    return acc;
  }, options);
}

export default Options;