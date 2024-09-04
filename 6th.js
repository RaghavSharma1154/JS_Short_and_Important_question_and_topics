//function hoisting -->

// test();
// function test(){
//     console.log("test function called");
// } // this function declaration will be hoisted and test() function will be called 

console.log(test);
// test();
var test = function(){
    console.log("test function expression called");
}// this will throw error because function expressions are not hoisted in js. js engine will treat this var test as a variable not as a function so the test variable will be hoisted not function 
//we can console that variable test but the output will be undefined. 