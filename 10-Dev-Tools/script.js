const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px'; 
}
// Regular
console.log('Hello');
console.log('Hello I am %s string!', '...');
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');
console.warn('Oh Noo!');
console.error('An error occurred');
console.info('Crocodiles eat 3-4 people per year');
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That\'s wrong');
console.clear();
// Grouping Together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
  console.timeEnd('fetching data');
  console.log(data);
});
console.table(dogs);