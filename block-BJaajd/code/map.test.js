const { map } = require('./map');

const mockFnMap = jest.fn((value) => value * 2);
map([5, 6, 7, 8, 9], mockFnMap);

test('test map function', () => {
  expect(map([1, 2, 3], (num) => num * 2)).toEqual([2, 4, 6]);
  expect(mockFnMap.mock.calls.length).toBe(5);
  expect(mockFnMap.mock.calls[0][0]).toBe(5);
  expect(mockFnMap.mock.results[0].value).toBe(10);
  expect(mockFnMap.mock.results[4].value).toBe(18);
});
