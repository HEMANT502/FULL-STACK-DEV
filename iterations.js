//for

for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element);
     
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(i + " x " + j + " = " + (i * j));
    };
    
}

let myArray =["apple", "banana", "cherry", "date", "elderberry"];

for (let i = 0; i < myArray.length; i++){
    const element = myArray[i];
    //console.log(element);
}

//break and continue

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        //console.log('i is 5, breaking the loop');
        break; // exit the loop when i is 5
    }
    //console.log(`value of i is ${i}`);
}    
for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        //console.log('detected 5, skipping this iteration');
        continue; // skip the rest of the loop when i is 5
    }
    //console.log(`value of i is ${i}`);
}    

let i=0
while (i <= 10) {
    //console.log(`while loop value ${i}`);
    i+=2;
}

let myarray2 =["flash", "superman", "batman", "wonder woman", "aquaman"];
let index = 0;

while (index < myarray2.length) {    
    //console.log(`hero is ${myarray2[index]}`);
    index++;
}

let score = 1

do {
    //console.log(`score is ${score}`);
    score++;   
} while (score <= 10);


let score2 = 11

do {
    //console.log(`score is ${score}`);
    score2++;   
} while (score <= 10);



//============================for of===========================

let myarray3 =["red", "green", "blue", "yellow", "purple"];

for (const color of myarray3) { //ye values print krta h na ki index print krta h
    //console.log(color);
}

let mystring = "Hello, World!";

for (const char of mystring) {
    //console.log(char);
}


//maps

let myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'New York');
myMap.set('age', 30);  //duplicate key, will overwrite the previous value and will not be added to the map

//console.log(myMap);

for (const key of myMap) {
    console.log(key);
    
}


const myobject = {
    game1: "need for speed",
    game2: "call of duty",
    game3: "assassin's creed",
    game4: "far cry"
};

//for (const [key, value] of myobject) {//object is not iterable, we cannot use for of loop to iterate over an object
    //console.log(key, value);
//}

const myobject2 = {
    js: "javascript",
    py: "python",
    java: "java",
    cpp: "c++"
};

for (const key in myobject2) {
   console.log(key);
   
}

for (const key in myobject2) {
   console.log(myobject2[key]); 
}


const programming =["javascript", "python", "java", "c++"];
for (const index in programming) {
    console.log(index);   //index print krta h value print nhi krta h
}

for (const index in programming) {
    console.log(programming[index]);   //value print krta h index print nhi krta h
}

//for in sse map aur set ko iterate nhi kr skte h kyuki wo iterable nhi hote h, for in loop objects ke liye use hota h, for of loop arrays aur strings ke liye use hota h.

const coding = ["html", "css", "javascript", "python"];

//coding.forEach(function (item) {
  //  console.log(item);
//})

//coding.forEach((item) => {
  //  console.log(item);
//})

function printItem(item) {
    console.log(item);
}

coding.forEach(printItem);

coding.forEach((item, index,arr) => {
    console.log(item, index, arr);
});


const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "python",
        languagefilename: "py"
    }
]


mycoding.forEach((item) => {
    console.log(item.languagename, item.languagefilename);
});

