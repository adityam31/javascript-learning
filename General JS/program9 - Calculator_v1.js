const add = (a , b) => a + b;
const sub = (a , b) => a - b;
const mul = (a , b) => a * b;
const div = (a , b) => a / b;
const mod = (a , b) => a % b;

function getResult(a, b, operation){
    return operation(a, b);
}

console.log(getResult(10, 5, add));
console.log(getResult(10, 5, sub));
console.log(getResult(10, 5, mul));
console.log(getResult(10, 5, div));
console.log(getResult(10, 5, mod));