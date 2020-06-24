//Function
function myFunction(){
    console.log("Heyaa, World!");
}

//Call to function
myFunction();
myFunction();

//Passing Arguments to Function
function addFunction(a, b){
    console.log(a + b);
}

addFunction(10,5);


//Global Scope
var globalVar = "This is a global variable";

function function1(){
    var funVar1 = "This is local to function 1";
    funVar2 = "This is not local to function 1 because we haven't written var";
}

function function2(){

    if(globalVar){
        console.log(globalVar);
    }
    else{
        console.log("globalVar doesn't exist in this scope.");
    }
    
    try{
        if(funVar1){
            console.log(funVar1);
        }
    } 
    catch(error){
        console.log("funVar1 doesn't exist in this scope.");
    }
    

    if(funVar2){
        console.log(funVar2);
    }
    else{
        console.log("funVar2 doesn't exist in this scope.");
    }
}

function1();
function2();


/* 
Note - If the global variable and a local variable (inside function) have same name,
local variable takes precedence over the global variable.
*/

//Arrow fuctions
console.log("\nArrow Function - ")
const addFun = (a, b) => a+b;
const subFun = (a, b) => a-b;

/*
The above add function is equivalent to ->
function(a, b)
{
    return a+b;
}
Same with subtract function
*/

console.log(addFun(10,5));
console.log(subFun(10,5));

//JavaScript Callback - https://www.dashingd3js.com/lessons/javascript-callback-functions


//Rest operator - you can pass any number of arguments to the function
console.log("\nRest operator - ");

function addFunRest(...args){
    let total = 0;
    for(let i = 0; i < args.length; i++)
        total += args[i];

    return total;
}

console.log(addFunRest(1,2,3));
console.log(addFunRest(1,2,3,4));
console.log(addFunRest(1,2,3,5,6,7,8));