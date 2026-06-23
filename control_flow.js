//if
const isloggedin=true
if (isloggedin){
    console.log("true")
}


if(!isloggedin){
    console.log('false')
}

if (2=='2'){
    console.log('executed');
    
}

if (2==='2'){
    console.log('executed');
    
}

const score=200

 if(score>100){
    const power ="fly"
    console.log(`user power:${power}`);
}

/*if(score>100){
    const power ="fly"
    
}
console.log(`user power:${power}`);     ye scope se bahar hai to error dega*/

const balance =1000

//if (balance>500) console.log("tested"),console.log('test2')

if (balance<500){
    console.log("less than");
    
}else if (balance<750){
    console.log("less than 750");
    
}else {
    console.log("less than 2000");
}    

const userloggedin=true
const debitcard=true

if (userloggedin && debitcard && balance>500){
    console.log('allowed');
    
}

const loggedingoogle=false
const loggedinemail=true

if (loggedinemail||loggedingoogle){
    console.log("user logged in");
    
}
