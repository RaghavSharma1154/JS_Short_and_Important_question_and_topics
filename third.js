var a = 5;
function b(){
    a=10;
    return;
    // var a = function(){};
}
b();
console.log(a);
//the output will be 5 because when we declare a variable inside the function after return statement it will be hoisted and a local variable will be created inside that function and when we console.log (a) then the global variable a will be printed on screen if we comment out the line var a = function(){} then the output will be 10 because then the global variable will be updated inside the function and no local variable is created inside the function.  
