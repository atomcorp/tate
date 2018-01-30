import { WxH } from '../tate/helpers.js';

test('WxH should convert 2 numbers to object', () => {
  expect(WxH(100, 100)).toEqual({width: 100, height: 100});
})

