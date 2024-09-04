//decorator functions are the functions which add some functionality to a other function without changing its original code.
let car ={
    wheel : 4
}
function color(c){
    return (obj)=>{
        obj.color = c;
    }
}

color('red')(car);
console.log(car);

