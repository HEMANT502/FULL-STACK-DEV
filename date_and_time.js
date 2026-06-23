let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

//let mycreateddate=new Date(2026,2,23)
//let mycreateddate=new Date(2026,2,23,11,30)

//let mycreateddate=new Date("2026-04-4")
let mycreateddate=new Date("1-14-2026")
console.log(mycreateddate.toString());

let mytimestamp=Date.now()

console.log(mytimestamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));  //1000 se divide krke hmne seconds me convert kr diya miliseconds ko



