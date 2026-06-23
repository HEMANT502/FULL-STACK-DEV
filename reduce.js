const mynums = [1, 2, 3, 4, 5];

const sum = mynums.reduce( function (accumulator, currentValue) {
    console.log(`acc :${accumulator}  and curval :${currentValue}`)
    return accumulator + currentValue;
}, 0);
console.log(sum); //reduce method executes a reducer function on each element of the array, resulting in a single output value. In this case, it sums up all the numbers in the mynums array and returns the total.




