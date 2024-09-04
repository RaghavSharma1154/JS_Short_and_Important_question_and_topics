//compose functions -->compose function are the function which takes on more than one function
//as parameter and the output returned by one function will be the input for another function

const multiplyBy2 = (n) => n*2;
const sqr = (n) => n*n;
const decrement = (n) => n-1;

//compose function --> order of execution right to left.
//question: first multiplyBy2 then square it and then decrement
// const compose = (fn1,fn2,fn3) => (data) => fn1(fn2(fn3(data)));//right to left
//or
// function compose(fn1,fn2,fn3){
//     return function(data){
//         return fn1(fn2(fn3(data)));
//     }
// }
// const res =compose(multiplyBy2,sqr,decrement)(3);
// console.log(res);//

//Pipe function --> pipe functions are almost like compose function but its execution order
//is from left to right

const pipe = (fn1,fn2,fn3) =>(data) =>fn3(fn2(fn1(data)));
const res = pipe(multiplyBy2,sqr,decrement)(3);//left to right
console.log(res);