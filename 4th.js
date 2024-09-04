// console.log({}=={});//false
let a ={};
let b={};
console.log(a===b);//false
//the output of above program will be false because when we compare two variables their value is compared but when we compare two object their memory location is compared if they are pointing to same memory location then it will return true otherwise false

let c = {};
let d = c;
console.log(c===d);//true
//output of this program will be true because c is an object and d is pointing to c so both objects belongs to same memory locations.
