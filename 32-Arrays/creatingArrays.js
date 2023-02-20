// Finding out length of an array
let names = ['Rahul', 'Ravi', 'James', 'Santosh'];
const lengthOfArray = names.length;
// Check if given input is an array or not
Array.isArray('Simran'); // false
Array.isArray(['Simran', 10, 20]); // true
Array.isArray(undefined); // false
Array.isArray({totalMarks: 93}); // false

// Creating arrays using Array Literal
const array = [1, 2, 3, 4, 5];
// Creating an array using "new" keyword
const array1 = new Array(1, 2, 3, 4, 5);
const array2 = new Array(5); // (empty * 5)
// Creating an array by omitting the new keyword
const array3 = Array(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
const array4 = Array(5); // (empty * 5)
// Creating an array by using Array.of()
const array5 = Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
const array6 = Array.of(5); // [5]
// Creating an array by using Array.from() -> Takes only iterable
const array7 = Array.from(1, 2, 3); // error
const array8 = Array.from('Hello'); // ['H','e','l','l','o']
// Array.from() is used to traverse DOM elements
const listItems = document.querySelectorAll('li');
const array9 = Array.from(listItems);