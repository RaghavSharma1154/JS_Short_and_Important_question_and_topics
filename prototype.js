//Prototype is a mechanism by which js objects inherits features/properties from one another
let obj = {
    getAge:function(){
        return new Date().getFullYear()-this.birth;
    }
}
let std ={ 
    name:'john',
    birth : 2004,
    // getage : obj.getAge
}
let teacher={
    name:'andrew',
    birth : 1980,
    // getage:obj.getAge
}

// console.log(std.getage());
std.__proto__ = obj;
teacher.__proto__ = obj;
// console.log(std.getAge());
// console.log(teacher.getAge());

//we can also create our custom prototypes -->
Object.prototype.details = function(){
    return this;
}
// console.log(std.details());
// console.log(teacher.details());
String.prototype.customLength = function(){
    return this.length+2;
}
String.prototype.msg = "this is a custom message";
let s= "raghav";
console.log(s.customLength());
console.log(s.msg);