let count = 0;
function getData(){
    console.log(`clicked ${count++} times`);
}
function debounce(fn,d){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, d);
    }
}
const db = debounce(getData,2000);