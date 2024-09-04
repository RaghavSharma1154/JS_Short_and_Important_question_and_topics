//IIFE(Immediate Invoked Function Expression) -->
//recursion with IIFE -->
// (function func(num){
//     console.log(num);
//     num++;
//     num !== 5 ? func(num) : console.log("finished");
// })(0);

//IIFE does not pollute global object namespace 
//Private variables and methods from closure -->
// const increment = (()=>{
//     let count = 0;
//     console.log(count);
//     const credit = (num) => console.log(`I have ${num} credits`);
//     return ()=>{
//         count++;
//         credit(count);
//     }
// })();
// increment();
// increment();
// credit(3);//reference error

//the module pattern -->
const Score = (()=>{
    let count = 0;
    return {
        current : ()=>{return count;},
        increment : ()=>{count++},
        reset : ()=>{count = 0}

    }
})();
console.log(Score.current());//0
Score.increment();//1
Score.increment();//2
console.log(Score.current());//2
Score.reset();//0
console.log(Score.current());//0
