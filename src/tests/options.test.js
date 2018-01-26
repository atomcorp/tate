import Options, {
  defaultOptions
} from '../tate/options.js';

test('Test options', () => {
  const optionsStart = {
    layout: "18:9", 
    ratio: "complex"
  }
  // this feels dodgy
  const defaultExample = defaultOptions();
  expect(Options(optionsStart)).toEqual(Object.assign(
    {}, 
    defaultExample, 
    optionsStart
  ));
  expect(Options()).toEqual(defaultExample);
  
});