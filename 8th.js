//Promise -->
let p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve("done");
        reject("rejected");
    }, 1000);
})
p
.finally(()=>{
    console.log("finally");
})
.then((val)=>{
    console.log(val);
})
.catch((err)=>{
    console.log(err);
})
