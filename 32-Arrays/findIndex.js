const array = [1, 2, 3, 4, 5];
const result = array.findIndex((item) => item > 3);
// 1

const array1 = [
  {name: "apples", quantity: 2},
  {name: 'oranges', quantity: 3},
  {name: "Cherries", quantity: 4}
]

const result1 = array1.findIndex(({name}) => name === "Cherries");
// 2

const result2 = array1. findIndex(({name}) => name === "Mango");
// -1