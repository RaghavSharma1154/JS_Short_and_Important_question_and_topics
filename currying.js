// currying is a method of calling closures functions -->
// function cl(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// let ans = cl(12)(12)(4);
// console.log(ans);
function mul(){
    return function(num){
        return num*10;
    }
}
let ans = mul();
console.log(ans(4));
