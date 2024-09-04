//A function with its laxical scope is a closure
function closure(){
    let outVal = 9;
    return function test(){
        let x = 10;
        return function inner(){
            return x*outVal;
        }
    }
}
let test = closure();
let inner = test();
// console.log(inner());//90

//To check closure -->
console.dir(inner);