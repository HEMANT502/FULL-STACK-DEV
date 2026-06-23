const score=4.239;

//console.log(score/2);

const balance = new Number(100)
newbalance = balance.toString()


/*console.log(score)

console.log(balance)

console.log(typeof balance)
console.log(typeof newbalance)

console.log(score.toString().length)

console.log(score.toFixed(2)) //precision value 

console.log(score.toExponential(2))//exponential notation with 2 digits after the decimal point

console.log(score.toPrecision(3))//precision of 3 significant digits

console.log(score.valueOf())//returns the primitive value of a number object

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'))//formats the number according to the specified locale (in this case indian locale) and returns a string representation of the number with appropriate separators
*/

//===============================================maths============================================

/*console.log(Math)

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.floor(5.2))
console.log(Math.ceil(4.1))
console.log(Math.min(-4,3,5,6,7,2,4))
console.log(Math.max(-4,3,5,6,7,2,4))
*/


console.log(Math.random())//generates a random number between 0 (inclusive) and 1 (exclusive)
console.log((Math.random()*10)+1)


const min =10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))