exports.min = function min(array) {
  if (array.length == 0) {
    return Math.min.apply(null, array);
  } else {
    return 0;
  }
}

exports.max = function max(array) {
  if (array.length == 0) {
    return Math.max.apply(null, array);
  } else {
    return 0;
  }
}

exports.avg = function avg(array) {
  if (array.length == 0) {
    return array.reduce((a, b) => a + b) / array.length;
  } else {
    return 0;
  }
}

min(1, 2, 3, 4);
max(1, 2, 3, 4);
avg(1, 2, 3, 4);