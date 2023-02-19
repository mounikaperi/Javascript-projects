Array.prototype.myAt = function(index) {
  if (index > 0) { // If index is positive traverse from left
    return this[index];
  } else if (index < 0) { // If index is negative traverse from right
    return this[this.length + index];
  }
}

const array1 = [1, 2, 3, 4, 5];
// If positive index is passed, search happens from left
array1.myAt(2);  // 3

// If negative index is passed, search happens from right
array1.myAt(-4); // 2

// If index is passed which is out of bound, undefined is returned
array1.myAt(8); // undefined