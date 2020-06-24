//Synchronous Example

const myFunc  = () => {
    console.log("I am in function!");
};


console.log("Start");  //This gets executed

myFunc();   //then this function gets called

console.log("End"); //this statement waits for function to complete and then gets executed