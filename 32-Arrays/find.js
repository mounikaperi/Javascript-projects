Array.prototype.find = function(callback) {
  for (let i=0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

const array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const result1 = array1.find((element) => element % 2 === 0); // 10

const result2 = array1.find((element) => element % 3 === 0); // 30

// returns first found Element

const array2 = [{name: 'ABC'}, {name: 'XYZ'}];
const result3 = array2.find((person, index, personsArray) => {
  return person.name === 'XYZ';
})
// Output: {name: 'XYZ'};

const result4 = array2.find((person, index, personsArray) => {
  return person.name === 'BEF';
})
// Output : undefined
