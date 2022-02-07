const test = [1, 2, 3, 4];

function sumFor(list) {
  let x = 0;
  for (let i = 0; i < list.length; i++) {
    x += list[i];
  }
  return x;
}

console.log(sumFor(test));

function sumWhile(list) {
  let i = 0;
  let x = 0;
  while (i < list.length) {
    x += list[i];
    i++;
  }
  return x;
}

console.log(sumWhile(test));

function sumRecursion(list) {
  let ret;
  if (list.length === 0) {
    ret = 0;
  } else {
    ret = list[0] + sumRecursion(list.slice(1, list.length));
  }
  return ret;
}

console.log(sumRecursion(test));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(test));
