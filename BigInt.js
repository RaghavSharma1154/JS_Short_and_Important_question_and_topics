//BigInt is a data type which is used to handle a large numeric value
//A BigInt literal must be an integer and we can not use the Math function on BigInt Literal

// let x = 1233456787888977775497646348763874648;
// console.log(x);//1.2334567878889778e+36 It will produce the output in form of exponential
//console.log(typeof x);//Number

//Defining BigInt -->

//1st method -> to make bigInt append 'n' on that large numeric value
// let x = 1233456787888977775497646348763874648n;
// console.log(x);//1233456787888977775497646348763874648n
// console.log(typeof x);//BigInt

//2nd method -> use  BigInt(value)
let x = BigInt(1233456787888977775497646348763874648);
// console.log(x);//1233456787888977795114868182465118208n
// console.log(typeof x);//bigint

//we can not use Math function on bigint-->
// console.log(Math.max(x,23));//error
