//Javascript Objects
//Basically like a python dictionary

var myObj = {
    "name":"Aditya",
    "class":"BE",
    "division":"C",
    "age":20,
    "favourite show": "Game of Thrones"
};

//Accessing object properties using dot operator
name = myObj.name;
age = myObj.age;

//or using []
favShow = myObj["favourite show"];

//updating the object properties
myObj.age = 21;
myObj["favourite show"] = "Sherlock";

//adding properties to the object
myObj.colour = "blue";
myObj["favourite team"] = "Chelsea"; 

console.log(myObj);


//deleting a property
delete myObj["favourite show"];
console.log(myObj);

//We can also have numbers as properties
testObj = {
    1:"hello",
    2:"how are you",
    3:"bye"
};

/*
You can use objects instead of switch statements.
You can use it for lookups.
*/

//To check whether object has a property or not
console.log("\nhasOwnProperty - ");
console.log(myObj.hasOwnProperty("colour"));
console.log(myObj.hasOwnProperty("road"));

/*
Lets say we have a object and we want to values of all of its fields extracted
into individual variables.
This can be done destructring assignment
*/
console.log("\nDestructring assignment from Objects - ");

let personObj = {
    name : "Aditya",
    age : 21,
    city : "Pune"
};

/*
Normal way - 
p_name = personObj.name;
p_age = personObj.age;
p_city = personObj.city;
*/

let {name : p_name, age : p_age, city : p_city} = personObj;

console.log(p_name);
console.log(p_age);
console.log(p_city);

//you can also extract only the required properties into variables
let {name : p1_name, city : p1_city} = personObj;


//Destructuring can also work with nested object
console.log("\nDestructring assignment from Nested Objects - ");
let tempObj = {
    today : {
        max : 40,
        min : 32 
    }
};
//Extracting max temperature from today
let {today : {max : todayMax}} = tempObj;
console.log(todayMax);

/*
Suppose we only want to use selected properties of object in a function 
instead of the entire object, then we can use destructuring.

This is often used with API calls, to only use the info that we need.
*/
console.log("\nDestructring assignment for passing object to Function - ");

tempObj = {
    min : 20,
    max : 40,
    wind : 450,
    humid : 15
}

function avgTemp({min, max}){
    return (min + max)/2;
}

console.log(avgTemp(tempObj));

//concise object literal declarations using simple fields
console.log("\nconcise object literal declarations using simple fields - ");
/*
So lets say we have a function to create object. This simplifies the code.
*/

var createPerson = (name, age, city) => ({name, age, city});

console.log(createPerson("Aditya", 21, "Pune"));

//Concise declarative functions
console.log("\nConcise declarative functions - ");
tempObj = {
    temp : 10,
    setTemp(temp){
        this.temp = temp;
    }
};

console.log(tempObj);
tempObj.setTemp(20);
console.log(tempObj);

/*
OR

tempObj = {
    temp : 10,
    setTemp: function(temp){
        this.temp = temp;
    }
};
*/

//Using class to create constructor function -
console.log("\nUsing class to create constructor function - "); 
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

perObj = new Person("Aditya", 21);
console.log(perObj);

//Getters and Setters in class
console.log("\nGetters and Setters in class - ");
class Temperature{
    constructor(temp){
        this._temp = temp;  //the _ signifies that this is a private variable
    }

    get temperature(){
        return this._temp;
    }

    set temperature(temp){
        this._temp = temp;
    }
}

tempObj = new Temperature(20);
console.log(tempObj);

curTemp = tempObj.temperature; //Even though getters and setters are functions, 
console.log(curTemp);          //you access them like normal properties 

tempObj.temperature = 10;   //this invokes setter
console.log(tempObj)