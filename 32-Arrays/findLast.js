Array.prototype.findLast = function (callback) {
  for (let i= this.length; i>=0; i--) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
}

const array1 = [2, 5, 8, 12, 14];

const found = array1.findLast((element) => element > 45);
// undefined

const found1 = array1.findLast((element) => element > 3);
// 14

