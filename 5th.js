function test(){
    function foo(){
        return 100;
    }
    return foo();
    function foo(){
        return 10;
    }
}
console.log(test());
//the output will be 10 because function declarations are hoisted and both functions will declared in top and then second function will overwrite first one so the output will be the value returned by second function

