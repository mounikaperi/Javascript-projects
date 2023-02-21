Array.prototype.myIndexOf = function(element, fromIndex = 0) {
  for (let i=0; i< this.length; i++) {
    if (this[i] === element) {
      return i;
    }
  }
  return -1;
}

// Negative index cannot be passed to indexOf. It takes element itself as argument
const array = [1, 2, 3, 4, 5];
array.indexOf(2); // 0

array.indexOf(-2); // -1

array.indexOf(8); // -1

// indexOf() can't search objects. returns -1
const array1 = [{name: 'ABC'}, {name: 'XYZ'}]
array1. indexOf({name: 'ABC'}); // -1 