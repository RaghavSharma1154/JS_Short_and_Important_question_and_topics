//IIFE --> Immediate Invoked Function Expression.
(function (){
    var a=b=9;
})();
console.log(typeof a);//undefined
// console.log(a);//it will throw an reference error 
console.log(b);
console.log(typeof b);//number

// the typeof a will be undefined because the code will be executed like -->
//b=9
//var a=b
//b is not defined with var so b will have a global scope and it will be also accessed outside of function
// a is defined with var so a will have functional scope so it can not be accessed from outside of function
