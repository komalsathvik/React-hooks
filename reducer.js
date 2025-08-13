const reducer = (inital, sum) => inital + sum;
const array = [1, 2, 3, 4, 5];
console.log(array.reduce(reducer, 0));
