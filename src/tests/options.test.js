import Options, {
  defaultLayout,
  defaultRatio
} from '../tate/options.js';

test('Test options', () => {
  const optionsExample = {
    layout: "18:9", 
    ratio: "complex"
  }
  const defaultExample = Object.assign({},
    defaultLayout,
    defaultRatio
  )
  expect(Options(optionsExample)).toEqual(optionsExample);
  expect(Options()).toEqual(defaultExample);
  
});