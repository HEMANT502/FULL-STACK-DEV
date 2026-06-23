const useremail = []

if (useremail){
    console.log('got user logged in')
}else {
    console.log("don't have user email")
}


//falsy values in js

//false, 0, -0, bigInt 0n, "", null, undefined, NaN

//truthy values

//true, {}, [], 42, "0", "false", new Date(), -42, 3.14, infinity, -infinity, function(){}

// Nullish Coalescing OPERATOR (??):  NULL or undefined

let value;
//value = 5 ?? 10
//value = null ?? 10
//value = undefined ?? 10
value = null ?? 10 ?? 40
console.log(value);


//ternary operator 
//condition ? true : false

const iceteaprice =100
iceteaprice>=80 ? console.log('greater than 80') : console.log('not greater than 80');
