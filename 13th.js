// var num = 4;
// var num = 8;
// console.log(num);
// the output will be 8 because in js we can declare a variable multiple time but when we 
//will log that variable the latest variables's value will be logged.

function get(...args){
    console.log(typeof args);
}
get(21);//the output will be object because when we pass arguements with rest operator it
//takes it as an array and in js arrays are also object.
