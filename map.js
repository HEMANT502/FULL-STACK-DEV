const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = mynumbers.map((num) => num + 10);
//console.log(newNumbers); //map method creates a new array with the results of calling a provided function on every element in the calling array. In this case, it adds 10 to each number in the mynumbers array and returns a new array with the updated values.

//============chaining map method with filter method================

const newNumbers2 = mynumbers
  .map((num) => num + 10)
  .map((num) => num + 3)
  .filter((num) => num > 15);
//console.log(newNumbers2); //chaining the map method with the filter method allows us to first add 10 to each number in the mynumbers array and then filter out any numbers that are not greater than 15. The result is a new array that contains only the numbers that are greater than 15 after adding 10.


