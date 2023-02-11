import { solution } from '../src/index.js';
import assert from 'assert';

describe('test function solution', () => {
  it('test: Los pares son: [1, 4] o [2, 3] ', () => {
    const array = [1, 2, 3, 4];
    const target = 5;
    const result = solution(array, target);
    assert.equal(result, true);
  });
  it('test: Ninguna combinación devuelve 26', () => {
    const array = [4, 2, 6, 1, 26];
    const target = 26;
    const result = solution(array, target);
    assert.equal(result, false);
  });
  it('test: Los pares son: [0, 26]', () => {
    const array = [4, 2, 6, 0, 26];
    const target = 26;
    const result = solution(array, target);
    assert.equal(result, true);
  });
});
