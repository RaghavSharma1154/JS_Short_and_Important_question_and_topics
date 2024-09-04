//Generator Function --> Generator function allows to pause or resume the function execution
function* simpleGenerator(){
    console.log("inside generator function");
    yield 10;
    console.log("after first yield");
    yield 20;
    console.log("after second yield");
    yield 30;
    console.log("after third yield");
}
let obj = simpleGenerator();
console.log(obj.next());
//o/p -->inside generator function
// { value: 10, done: false }
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());