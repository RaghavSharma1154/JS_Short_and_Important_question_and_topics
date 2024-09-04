//closures -->
// Laxical scope --> when an inner function accesses the variables of outer function it called laxical scope.
function hello(){
    let a = 9;
    function inner(){
        return a;
    }
    return inner;
}
console.log(hello());//It will return a [Function : inner]
// let inner = hello();
// console.log(inner());//It will return a=9