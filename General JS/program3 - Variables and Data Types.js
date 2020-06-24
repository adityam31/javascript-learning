var a;  //Declaring a variable

console.log(a);

a = 2; //Assigning a variable

console.log(a);

a = Infinity //Infinity in JavaScript

console.log(a)

var b = 10; //Declaring and assigning the variable in same line

/*
Data types in JS - 
undefined, null, boolean, integer, string, symbol, number and object
*/

var myName = "Aditya";

//Changing the value
myName = "John";

myName = 8; //JavaScript is a loosely typed language


/*
There are 3 ways to declare a variable in JavaScript - 
1. var - use variable having function scope. It attaches the variable to windown object.
2. let - use variable which have block scope. It doen't attach the variable to window object.
         let doesn't allow you redeclare a variable within the same scope.
         you cannot do 
         let name = "XYZ"
         ...
         and the later again
         ... 
         let name = "ABC"

         This will produce an error.

3. const - constant. You cannot change the value later.

Good video - https://www.youtube.com/watch?v=XgSjoHgy3Rk
*/

const pi = 3.14;
 
//pi = 22/7; you cannot do this. You cannot reassign a const variable.

//But
const myArr = [1, 2, 3];

console.log(myArr);

// myArr = [2 , 2, 3]; you cannot change like this
//But you can change using index
myArr[0] = 2;
console.log(myArr);

/*
Objects (program 7) even though declared const are prone to mutation.
To prevent mutation, you can freeze an object. 
*/
console.log("\n Constant Objects - ")
const myObj = {
    pi : 3.14
};

console.log(myObj);

myObj.pi = 99;

console.log(myObj);

myObj.pi = 3.14;

//to prevent that from happening we can freeze the object.
Object.freeze(myObj);

try{
    myObj.pi = 99;
    console.log(myObj);
}
catch(ex){
    console.log(myObj);
}