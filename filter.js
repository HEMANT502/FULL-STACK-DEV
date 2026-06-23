const coding =["javascript", "python", "java", "c++"];

const values = coding.forEach((item) => {
    //console.log(item);
    return item;
});

//console.log(values);      //for each loop does not return anything, it is used for side effects like logging or modifying external variables. In this case, it will return undefined for each item in the array, resulting in values being undefined.

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newnums = mynums.filter((num) => num > 4);   //implicit return, if the function body has only one expression, you can omit the curly braces and the return keyword. The expression will be evaluated and returned automatically.
const newnums = mynums.filter((num) => {
    return num > 4                         //explicit return, if the function body has more than one expression, you need to use curly braces and the return keyword to specify what value should be returned from the function. In this case, the function will return true for numbers greater than 4, and false for numbers less than or equal to 4. The filter method will then create a new array containing only the numbers that satisfy the condition (greater than 4).
});
//console.log(newnums);

const newnums2 = []

mynums.forEach((num) => {
    if(num > 4){
        newnums2.push(num);
    }
});
//console.log(newnums2);   //using forEach loop to achieve the same result as filter method, but it is less efficient and more verbose than using filter. The forEach loop iterates through each element in the array and checks if it is greater than 4, and if so, it pushes it to the newnums2 array. This approach requires more lines of code and is less readable compared to using the filter method, which is specifically designed for this purpose.

const books = [
    { title: "Book 1", genre: "action", publish: 1981,edition:2008},
    { title: "Book 2", genre: "fiction", publish: 2021,edition:2022 },
    { title: "Book 3", genre: "history", publish: 2022,edition:2023 },
    { title: "Book 4", genre: "science", publish: 2020,edition:2021 },
    { title: "Book 5", genre: "fiction", publish: 2023,edition:2024 },
    { title: "Book 6", genre: "non-fiction", publish: 2024,edition:2025},
    { title: "Book 7", genre: "history", publish: 2025,edition:2026 },
    
];


let userbooks =  books.filter((bk) => bk.genre === "history")
 console.log(userbooks);
let userbooks2 =books.filter((bk) => bk.publish >=2000)
 console.log(userbooks2);
let userbooks3 =books.filter((bk) => bk.publish >=2000 && bk.genre === "history")
 console.log(userbooks3);

