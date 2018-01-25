import Container, {
  calculateDimensionIfRatio,
  breakApartRatio
} from '../tate/tate--container';

const WxH = (w, h) => ({width: w, height: h});

test('Should convert dimensions by ratio into integers', () => {
  expect(
    calculateDimensionIfRatio(WxH(100,100), WxH(4, 2))
  ).toEqual(WxH(100, 50));
  expect(
    calculateDimensionIfRatio(WxH(100, 100), WxH(3, 2))
  ).toEqual(WxH(100, 67));
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
