//Asynchronous Example

console.log("start");

setTimeout(() => {                          //In browser you can write window.setTimeout
    console.log("I am inside timeout!");
}, 2000);

console.log("end");