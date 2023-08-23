// // // task 1
// // const numbers = (num1, num2, num3) => num1 * num2 * num3;

// // console.log(numbers(2, 3, 4));

// // // task 2

// // const sentence = `I am a web developer 
// // I love to code 
// // I love to eat biriyani`;
// // console.log(sentence);

// // // task 3
// // const add = (x, y = 10) => x + y;

// // console.log(add(2));

// // // task 4

// const friends = friend => {
//       let evenElement = [];
//       for (const item of friend) {
//             if (item.length % 2 === 0) {
//                   evenElement.push(item);
//             }
//       }
//       return evenElement;
// }

// const result = friends(['Bayezid', 'habib', 'rahomullah', 'asad']);
// console.log(result);

// const findOddFriends = oddFriends => {
//       let oddElement = [];
//       for (const friend of oddFriends) {
//             if (friend.length % 2 === 1) {
//                   oddElement.push(friend)
//             }
//       }
// }

// const oddFriendsList = findOddFriends(['salam', 'kala', 'kalam', 'messi', 'neymar']);
// console.log(oddFriendsList);

// // task 3
const arr = items => {
      let squareOfElement = [];
      for (const item of items) {
            squareOfElement.push(item ** 2);
      }

      let sumOfAllSquareElement = 0;
      for (const elements of squareOfElement) {
            sumOfAllSquareElement += elements;
      }

      const average = parseFloat((sumOfAllSquareElement / items.length).toFixed(3));
      return average;
}

console.log(arr([2, 5, 6, 7, 9, 10]));

// task 4 
const arrays = (arr1, arr2) => {
      const combinedTwoArray = [...arr1,...arr2];
      const arrayElements = Math.max(...combinedTwoArray);
      return arrayElements;
}

const maximum = arrays([1, 2, 3], [4, 5, 6]);
console.log(maximum);