const arr = (2, 3, 5, 10, 55, 100);
Math.max(arr);


const arr1 = [2, 3, 5, 10, 55];
const newArr1 = arr1;
const copyArr1 = [...arr1];
const addCopyArr1 = [...arr1, 99];

newArr1.pop();

console.log(arr1);
console.log(newArr1);
console.log(copyArr1);
console.log(addCopyArr1);


