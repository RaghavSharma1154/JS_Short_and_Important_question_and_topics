count = 1;
function getCount(){
    console.log(`clicked ${count++} times`);
    document.getElementById('btn').disabled = false;
}
function throttle(call,d){
    console.log("immediate");
    return function(...args){
        document.getElementById('btn').disabled = true;
        setTimeout(()=>{
            call();
        },d);
    }
}
const thrott = throttle(getCount,2000);