//Method Chaining is a programming strategy that simplifies and embellishes your code . It is a mechanism
//for calling a method on another method of the same object . 

//Using Function Constructor -->
// function Calculator(){
//     let data = 0;
//     this.add = function(val){
//         data+=val;
//         return this;
//     }
//     this.sub = function(val){
//         data -= val;
//         return this;
//     }
//     this.multi = function(val){
//         data *= val;
//         return this;
//     }
//     this.divide = function(val){
//         data /= val;
//         return this;
//     }
//     this.print = function(){
//         console.log(data);
//     }
// }
// let obj = new Calculator();
// obj.add(10).sub(8).multi(50).divide(10).print();//10

//Using class -->
class Calculator{
    data = 0;
    add(val){
        this.data += val;
        return this;
    }
    sub(val){
        this.data -= val;
        return this;
    }
    multi(val){
        this.data *= val;
        return this;
    }
    divide(val){
        this.data /= val;
        return this;
    }
    print(){
        console.log(this.data);
    }
}
let obj = new Calculator();
obj.add(30).sub(10).multi(5).divide(20).print();//5