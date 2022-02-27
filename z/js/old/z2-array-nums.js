let number = 123
let array = []

array.unshift(parseInt(number.toString().substring(2, 3)));
array.unshift(parseInt(number.toString().substring(1, 2)));
array.unshift(parseInt(number.toString().substring(1, 0)));

console.log(array);