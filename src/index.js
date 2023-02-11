export function solution(array, target) {
  let result = false;
  array.forEach((element1) => {
    array.forEach((element2) => {
      if (element1 + element2 === target) result = true;
    });
  });
  return result;
}
