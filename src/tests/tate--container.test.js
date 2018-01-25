import Container, {
  calculateDimensionWithRatio,
  breakApartRatio
} from '../tate/tate--container';

import * as helpers from '../tate/helpers.js';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const { WxH } = helpers;

test('Should convert dimensions by ratio into integers', () => {
  expect(
    calculateDimensionWithRatio(WxH(100,100), WxH(4, 2))
  ).toEqual(WxH(100, 50));
  expect(
    calculateDimensionWithRatio(WxH(100, 100), WxH(3, 2))
  ).toEqual(WxH(100, 67));
  expect(
    calculateDimensionWithRatio(WxH(100, 100), WxH(1, 1))
  ).toEqual(WxH(100, 100));
});

test('Ratio break should deconstruct ratio strings', () => {
  expect(
    breakApartRatio('3:2')
  ).toEqual(WxH(3, 2));
  expect(
    breakApartRatio('18:9')
  ).toEqual(WxH(18, 9));
  expect(() => {
    breakApartRatio('d:9')
  }).toThrow(Error);
  expect(() => {
    breakApartRatio('')
  }).toThrow(Error);
});
