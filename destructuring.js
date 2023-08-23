// Destructuring object
const player = {
      name: 'Salib al HAsan',
      age: 35,
      money: '$500',
      phone: 01562485
}

// Destructuring method
const { name, age, money: taka, phone } = player;

console.log(name);
console.log(age);
// console.log(money);
console.log(taka);
console.log(phone);

// normal accesing method
// const getNameValue = player.name;
// console.log(getNameValue);
// console.log(getNameValue);
// console.log(getNameValue);
// console.log(getNameValue);
// console.log(getNameValue);

// Array destructuring

const [x, y] = [10, 20];
console.log(x, y);


function numbers(a, b, c) {
      return [a * 2, b * 3, c * 4];
}

const [first, second, third] = numbers(10, 20, 30);
console.log(first, second, third);