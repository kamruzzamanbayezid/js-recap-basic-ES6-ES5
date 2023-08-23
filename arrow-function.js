// function sum(a,b){
//       return a+b;
// }

// console.log(sum(2,3));

// arrow function 

const result = (a,b) => a+b;
console.log(result(5,6));

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName('Kamruzzaman', 'Bayezid'));

const sum = (data1, data2) => `The total sum of ${data1} and ${data2} is ${data1+data2}`;
console.log(sum(10,20));