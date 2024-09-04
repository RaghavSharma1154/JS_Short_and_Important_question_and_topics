// console.log(typeof (4+5+"6"));//String typeof "96" is string

// function car(){
//     this.make = "toyota";
//     return {make : 'alto'};
// }
// const obj = new car();
// console.log(obj.make);//alto

// (()=>{
//     let x = y = 10;
// })()
// console.log(typeof x);//undefined because x has local scope
// console.log(typeof y);//number because y has global scope with value 10

// let x = 100;
// (()=>{
//     var x =10;
// })();
// console.log(x);//100


// (()=>{
//     x=y=10;
// })();
// (()=>{
//     x=y=20;
// })();
// console.log(y);//20