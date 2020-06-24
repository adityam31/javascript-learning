//Array
var myArray = ["Aditya", 21];
console.log("\nArray - ");
console.log(myArray);

//Modify Array
console.log("\nModifying Array - ");
var a = [10, 20, 30];
console.log(a);

a[1] = 40;
console.log(a)

//Nested Array
var nestedArray = [["Aditya", 21], ["Tirthraj", 15], "This array contains name and age"];
console.log("\nNested Arrray - ");
console.log(nestedArray);

//Accessing Elements in Nested Array
console.log("\nAccessing Elements in Nested Array - ");

var nestedArray = [["Aditya", 21], ["Tirthraj", 15], [["Ameya", 14], ["Aabha", 5]]];

console.log("Aditya's age - "+ nestedArray[0][1]);
console.log("Aabha's age - "+ nestedArray[2][1][1]);

//Appending elements in array using push()
console.log("\nAppending elements in array using push()");
var myArray = [["Aditya", 21], ["Tirthraj", 15]];
console.log(myArray);

myArray.push(["Ameya", 14]);
console.log(myArray);

//Deleting Elements using pop
console.log("\nDeleting Elements using pop");
var myArray = [["Aditya", 21], ["Tirthraj", 15]];
console.log(myArray);

var remove = myArray.pop();
console.log(remove);
console.log(myArray);

var remove = myArray.pop();
console.log(remove);
console.log(myArray);

var remove = myArray.pop();
console.log(remove);
console.log(myArray);

//Shift function to delete first element
console.log("\nShift function to delete first element");
var myArray = [["Aditya", 21], ["Tirthraj", 15]];
console.log(myArray);

var remove = myArray.shift();
console.log(remove);
console.log(myArray);

var remove = myArray.shift();
console.log(remove);
console.log(myArray);

var remove = myArray.shift();
console.log(remove);
console.log(myArray);

//Unshift function to add to beginning
console.log("\nUnshift function to add to beginning");
var myArray = [["Aditya", 21], ["Tirthraj", 15]];
console.log(myArray);

myArray.unshift(["Ameya", 14]);
console.log(myArray)

//Spread Operator to copy an array
arr1 = [1, 2, 3];
//let arr2 = arr1; this is not  going to copy the array 
arr2 = [...arr1]; //... is the spread operator which will spread the contents of arr1 this creating a copy

/*
Lets say we have an  and we want to values of certain or all extracted
into individual variables.
This can be done destructring assignment
*/

console.log("\nDestructring assignment from Array- ");

arr1 = [1, 2, 3, 4, 5];
//extracting elements at index 0, 1 and 3
let [x ,y, , z] = arr1;
console.log(x, y, z);

//Swapping numbers using destructuring
console.log("\nSwapping numbers using destructuring- ");
let p = 10, q = 20;
console.log(p, q);

[p, q] = [q, p];

console.log(p, q);

/*
Lets say we want to make copy of array except for first two elements
*/
console.log("\ndestructuring assignment with the rest operator - ");
arr1 = [1, 2, 3, 4, 5];
[, , ...arr2] = arr1;

console.log(arr1);
console.log(arr2);