const add = (...args) => args.reduce((total, num)=> total + num); //optional - initial value -0
const sub = (...args) => args.reduce((total, num)=> total - num); //optional - intital value - 2*args[0])
const mul = (...args) => args.reduce((total, num)=> total * num); //optional - initial value - 1 
const div = (...args) => args.reduce((total, num)=> total / num); //optional - intial value -  args[0]**2
const mod = (...args) => args.reduce((total, num)=> total % num);

console.log(add(10, 5, 5, 10, 20));
console.log(sub(10, 5, 5, 2));
console.log(mul(10, 5, 10));
console.log(div(10, 5, 4));
console.log(mod(10, 3));