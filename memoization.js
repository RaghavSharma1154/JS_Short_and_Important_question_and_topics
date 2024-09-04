//Memoization is a technique for sorting values returned by a function to avoid redo 
//computations

// function multiplyBy10 (){
//     return (num)=>{
//         return num*10;
//     }
// }
// const resFunc = multiplyBy10();
// console.log(resFunc(3));
// console.log(resFunc(4));
// console.log(resFunc(3));
//this above function is doing the calculation for 3 twice meanwhile it has computed the result
//few statement ago 


function multiplyBy10(num){
    return num*10;
}
function memoization(fn){
    const memo = {};
    return (...args)=>{
        if(args.toString() in memo){
            console.log(memo);
            return memo[args.toString()];
        }
        let res = fn(...args);
        memo[args.toString()]  = res;
        return res;
    }
}

const middleFunc = memoization(multiplyBy10);
console.log( middleFunc(3));
console.log( middleFunc(4));
console.log( middleFunc(3));
console.log( middleFunc(4));
//Above function will not redo computation for same input.