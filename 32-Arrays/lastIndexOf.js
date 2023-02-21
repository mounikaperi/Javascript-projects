Array.prototype.myLastIndexOf = function(element, fromIndex = this.length - 1) {
  for (let i= fromIndex; i>=0; i--) {
    if(this[i] === element) {
      return i;
    }
  }
  return -1;
}

const array = ["a", "b", "c", "d","e"];

array.lastIndexOf("a"); // 4

array.lastIndexOf("z"); // -1