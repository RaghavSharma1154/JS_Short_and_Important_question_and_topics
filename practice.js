//decorator function --> Decorator functions are the function which adds some other functionalities to an object or functions without changing its original properties..
// let car = {
//     wheel : 4
// }
// function deco(obj){
//     return function(c){
//         obj.color= c;
//     }
// }
// deco(car)('red');
// console.log(car);

//Generator Functions --> generator function is a function which can stop its execution and after resuming it executes from where it has been stopped.
// function* gen(){
//     while(true){
//         console.log("start");
//         yield 1;

//         yield 2;

//         yield 3;

//         yield 4;

//         console.log("last");
//     }
// }

// const res = gen();
// console.log(res.next().value);
// console.log(res.next().value);
// console.log(res.next().value);
// console.log(res.next().value);
// console.log(res.next().value);

//QU1:write a function that checks a given number is multiple of both 3 and 5 or not?
// function check(num){
//     let m_of_3 = 0;
//     let m_0f_5 = 0;
//     if(num % 3 === 0){
//         m_of_3 = 1;
//     }
//     if(num % 5 === 0){
//         m_0f_5 = 1;
//     }

//     if(m_0f_5 > 0 && m_of_3 > 0){
//         return `${num} is multiple of 3 and 5 both`;
//     }
//     else{
//         return `${num} is not multiple of 3 and 5`;
//     }
// }
// let res = check(15);
// console.log(res);
//QU2: FIBONACCI SERIES -->
// function fib(range){
//     let sum =0;
//     for(let i=1;i<=range;i++){
//         sum += i;
//         // sum *= i;//for multiply
//     }
//     return sum;
// }
// let res = fib(6);
// console.log(res);
//QU3:palindrome -->
// function pal(str){
//     let i=0;
//     let j=str.length-1;
//     while(i<j){
//         if(str[i] !== str[j]){
//             return -1;
//         }
//         i++;
//         j--;
//     }
//     return 1;
// }
// let res = pal('anitina');
// console.log(res);
//QU4:reverse of a string-->
// function rev(s){
    // let r = s.split("").reverse().join('');
    // return r;
    // let j=s.length-1;
//     let i=0; 
//     [s[i],s[j]] = [s[j],s[i]];  
//     return s;
// }
// let res = rev("raghav");
// console.log(res);

//Fibonacci series -->
// function fib(range,arr=[0,1]){
//     if(range < 3) return arr;
//     for(i=arr.length-2;i<range-2;i++){
//         arr.push(arr[i]+arr[i+1]);
//         console.log('check');
//     }
//     return arr;
// }
// let res = fib(4);
// console.log(res);

// function atMostTwice(arr){
//     if(arr.length<=2) return arr.length;
//     let j=2;
//     for(let i=2;i<arr.length;i++){
//         if(arr[i]!== arr[j-2]){
//             arr[j] = arr[i];
//             j++;
//         }
//     }
//     return j;
// }
// let ans = atMostTwice([1,1,1,2,2,2,3,3,4]);
// console.log(ans);
//0 1 2 3 4 5 --> index
//1 1 1 2 2 3 -->element
//    i
//    j
//    j i
//1 1 2 2 2 3
//      j i
//1 1 2 2 2 3
//        j i
//1 1 2 2 3 3
//          j i  --> i === arr.length return j; // 5


//3Sum problem --> Time Complexity O(n^3)
// let arr = [1,-1,0,2,-1,1 ,4,-4];
// function triplets(arr){
//     arr.sort((a,b)=>a-b);
//     // console.log(arr);
//     let res = [];
//     for(i=0;i<arr.length-2;i++){
//         for(j=i+1;j<arr.length-1;j++){
//             for(iter=j+1;iter<arr.length;iter++){
//                 let sum = arr[i]+arr[j]+arr[iter];
//                 if(sum === 0){
//                     res.push([arr[i],arr[j],arr[iter]]);
//                 }
//             }
//         }
//     }
//     let obj={};
//     for(i=0;i<res.length;i++){
//         obj[res[i]] = obj[res[i]] ? obj[res[i]] +1 : 1;
//     }
//     // console.log(obj);
//     count = 0;
//     for(key in obj){
//         res[count] = [key];
//         count++;
//     }
    
//     let ans = res.slice(0,count).map(innerArray => innerArray[0].split(',').map(Number));
//     console.log(ans);
// }
// triplets(arr);

// //another solution is -->
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     var res = []

//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.length; i++) {
//        if (nums[i] > 0) break
//        if (i === 0 || nums[i - 1] != nums[i]) {
//            twoSum(nums, i, res)
//        }
//     }

//     return res
// };

// var twoSum = function(nums, i, res) {
//   var lo = i + 1, hi = nums.length - 1;

//   while (lo < hi) {
//       var sum = nums[i] + nums[lo] + nums[hi]

//       if (sum < 0) {
//         lo++
//       } else if (sum > 0) {
//         hi--
//       } else {
//         res.push([nums[i], nums[lo], nums[hi]])
//         lo++
//         hi--

//          while (lo < hi && nums[lo] === nums[lo - 1]) {
//           lo++
//          }
//       }
//   }
// }

//Integer to roman-->
// function I_TO_R(num){
//     let data = {
//         1   :   "I"   ,
//         4   :   "IV"  ,
//         5   :   "V"   ,
//         9   :   "IX"  ,
//         10  :   "X"   ,
//         40  :   "XL"  ,
//         50  :   "L"   ,
//         90  :   "XC"  ,
//         100 :   "C"   ,
//         400 :   "CD"  ,
//         500 :   "D"   ,
//         900 :   "CM"  ,
//         1000:   "M" 
//     };
//     let arr= [];
//     let str = "";
//     let n = num;
//     for(let key in data){
//         arr.push(Number(key));
//     }
//     // arr.sort((a,b)=>b-a);
//     for(let i=arr.length-1;i>=0;i--){
//         while(n >= arr[i]) {
//             str += data[arr[i]];
//             n -= arr[i];
//         }
//     }
//     return str;
// }
// let ans = I_TO_R(1994);
// console.log(ans);

//Snail Traversal -->
// function Snail(arr,rowsCount,colsCount){
//     if(arr.length !== rowsCount * colsCount){
//         return [];
//     }
//     let res = [];
//     for(let i=0;i<rowsCount;i++){
//         res.push(new Array(colsCount));
//     }
//     // console.log(res);
//     let flag =false,ind=0;
//     for(let j=0;j<colsCount;j++){
//         if(!flag){
//             for(let i=0;i<rowsCount;i++){
//                 res[i][j] = arr[ind++];
//             }
//         }else{
//             for(let i=rowsCount-1 ;i>=0;i--){
//                 res[i][j] = arr[ind++];
//             }
//         }
//         flag = !flag;
//     }
//     console.log(res);
// }
// Snail([1,2,3,4,5,6,7,6,7,7,8,9,12,3,45],3,5);


// function Snail(arr,r,c){
//     if(arr.length && r*c !== arr.length){
//         return [];
//     }
//     let res = []
//     for(let i=0;i<r;i++){
//         res.push([]);
//     }
//     // console.log(res);
//     let flag = true,ind = 0;
//     for(let i=0;i<c;i++){
//         if(flag){
//             for(let j=0;j<r;j++){
//                 res[j][i] = arr[ind];
//                 // console.log(res);
//                 ind++;
//             }
//         }
//         if(!flag){
//             for(let j=r-1;j>=0;j--){
//                 res[j][i] = arr[ind];
//                 ind++;
//             }
//         }
//         flag = !flag;
//     }
//     console.log(res);
// }
// Snail([1,2,3,4,5,6,7,6,7,7,8,9,12,3,45],3,5);


// function context(){
//     var s = 'first';
//     return function(){
//         var s = 'second';
//         return function(){
//             var s = 'third';
//             return this.s;
//         } 
//     }
// }
// const ans =context()()();
// console.log(ans);

// let arr=[5,1,4,5,5,5,2];
// function func(nums){
//     let obj ={};
//     let n = nums.length;
//     for(const i of nums){
//         obj[i] = obj[i] ? obj[i] +1 : 1;
//     }
//     let half = n/2;
//     for(const key in obj){
//         if(obj[key] > half){
//             return parseInt(key);
//         }
//     }
// }
// const res = func(arr);
// console.log(res,typeof res);

//Rotate Array -->
// let nums = [1,2,3,4,5,6,7];
// let k = 3;
// function rotate(nums,k){
//     let n  = nums.length -k;
//     let arr1 = nums.slice(0,n);
//     nums = nums.slice(n,nums.length);
//     nums.push(...arr1);
//     console.log(nums);
// }
// rotate(nums,k);
// console.log(nums);

// let str = "data";
// console.log(str[1]);
// var isAnagram = function(s, t) {
//     if(s.length != t.length) return false;
//     const obj = {};  
//     const obj1 = {};
//     for(let i=0;i<t.length;i++){
//         obj[t[i]] = obj[t[i]] ? obj[t[i]] + 1 : 1;
//         obj1[s[i]] = obj1[s[i]] ? obj1[s[i]] + 1 : 1;
//     }
//     for(key in obj){
//         if(obj[key] !== obj1[key]) return false; 
//     }
//     return true;
// };
// const check =isAnagram('anagram','naamargs');
// console.log(check);

// function rotate(arr,k){
//     arr.unshift(...arr.splice(-k))
//     console.log(arr);
// }

// rotate([1,2,3,4,5,6,7,8],7);

// function stock(prices){
//     let buy = 0;
//     for(let i=1;i<prices.length;i++){
//         if(prices[i]<prices[buy]){
//             buy = i;
//         }
//     }
//     if(buy == prices.length-1) return 0;
//     let sell = buy +1;
//     for(let j=sell+1;j<prices.length;j++){
//         if(prices[j] > prices[sell]){
//             sell =j;
//         }
//     }
//     return prices[sell] - prices[buy];
// }
// const res = stock([7,6,4,3,1,2,1,9]);
// console.log(res);

// let nums = [2,1,4,5,78,90,32];
// function diff(nums){
//     nums.sort((a,b)=>a-b)
//     let ans = nums[nums.length-1]*nums[nums.length-2] - nums[0]*nums[[1]];
//     console.log(ans);
// }
// diff(nums);

//you have money and you have to Buy 2 chocolates from the prices array and after buying the chocolates
//money should be a non-negative number if there is no chocolate in range of money return money

// function chocolate(prices,money){
//     prices.sort((a,b)=>a-b);
//     // console.log(prices);
//     if(prices[0] >= money || prices[1] >= money ){
//         return money;
//     }
//     let first =prices[0],sec = prices[1],rem = (sec+first)-money;
//     return rem;
// }
// const res = chocolate([1,4,3,2,3],3);
// console.log(res);

// function jump(arr){
//     let jump=0,i=0;
//     while(i < arr.length){
//         if(arr[i]===0) return false;
//         jump = arr[i];
//         i += jump;
//     }
//     return true;
// }
// const res = jump([3,2,1,2,0]);
// console.log(res);

// var minOperations = function(s) {
//     let count = 0;
//     let i=0;
//     let j=i+1;
//     // "1 1 1 1 "
//     let prev = s[i];
//     while(j<s.length){
//         if(prev == s[j]){
//             if(prev == '0'){
//                prev = '1' ;
//             }else{
//                 prev = '0';
//                 //prev=0 
//             }
//             count++;
//         }else{
//             prev = s[j];
//         }
//         i++,j++;//i=1,j=2 , 
//     }
//     return count;
// };
// const res = minOperations("0100");
// console.log(res);

// function fun(colors,neededTime){
//     let n = colors.length;
//     if(n <= 1) return 0;

//     //pointers , time and total -->
//     let prev = 0,next = prev+1;
//     let time = 0;

    //iterate the whole string 'colors' -->
//     while(next<n){
//         //check for consecutive colored balloons -->
//         let max = 0;
//         let currentTotal = neededTime[prev]; 
//         if(colors[prev] == colors[next]){
//             while(colors[prev] == colors[next]){
//                 max = Math.max(max,neededTime[prev],neededTime[next]);
//                 currentTotal += neededTime[next]; 
//                 next++;
//             }
//             time += (currentTotal - max);
//         }else{
//             next++;
//         }
//         prev = next -1;
//     }
//     return time;
// }
// let colors = "abaac";
// let neededTime = [1,2,3,4,5];
// const res = fun(colors,neededTime);
// console.log(res);

// var getLengthOfOptimalCompression = function(s, k) {
//     let obj = {};
//     for(let i=0;i<s.length;i++){
//         obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
//     }
//     let arr = [];
//     for(key in obj){
//         if(obj[key] > 1){
//             arr.push(`${key}${obj[key]}`)
//         }else{
//             arr.push(`${key}`);
//         }
//     }
//     let str = arr.join('');
//     return remove(str,k,s);
// };
// function remove(str,k,s){
// }
// let s = "aaabcccd";
// k = 2;
// const res = getLengthOfOptimalCompression(s,k);
// console.log(res);


// jump game -->
// function jump(nums){
//     let obj = {};
//     let n = nums.length;
//     let reachability = 0;
//     for(let i=0;i<n;i++){
//         if(i > reachability){
//             return false;
//         }
//         reachability = Math.max(reachability,i+nums[i]);
//     }
//     return true;
// }
// let nums = [2,3,1,1,4];
// const res = jump(nums);
// console.log(res);

//To make all strings equal -->
// function equal(words){
//     let obj = {};
//     let n = words.length;
//     if(n <= 1) return false;
//     for(let i=0;i<n;i++){
//         let n1 = words[i].length;
//         for(var j=0;j<n1;j++){
//             obj[words[i][j]] = obj[words[i][j]] ? obj[words[i][j]] + 1 : 1;
//         }
//     }
//     console.log(obj);
//     for(let key in obj){
//         if(obj[key] % n !== 0){
//             return false;
//         }
//     }
//     return true;
// }

// const res = equal(["abcb","aabbc","bcb"]);
// // const res = eq(["abcb","aabbc","bcb"]);
// console.log(res);

// Create a 2D array -->
// function twoD(nums){
    // let obj ={};
    // let res =[];
    // let  i=0;
    // for(ele of nums){
    //     obj[ele] = obj[ele] ? obj[ele] + 1 : 1;
    // }
    // console.log(obj);
    // let max = 0;
    // for(key in obj){
    //     max = Math.max(max,obj[key]);
    // }
    // for(let i=0;i<max;i++){
    //     res.push([]);
    // }
    // let iter = 0;
    // let iter1 = 0;
    // for(let key in obj){
    //     let val = (obj[key]);
    //     while(val > 0){
    //         res[iter][iter1] = key;
    //         iter1++;
    //         val--;
    //     }
    //     iter++;
    // }
    // console.log(res);
//     let n = nums.length;
//     let res = [[]];
//     for(let i =0;i<n;i++){
        
//     }
// }
// twoD([1,3,4,1,2,3,1]);

// function greater(nums1,nums2){
//     let obj ={};
//     let n1 = nums1.length;
//     let n2 = nums2.length;
//     for(let i=0;i<n2;i++){
//         obj[nums2[i]] = nums2.indexOf(nums2[i]);
//     }
//     console.log(obj);
//     let res = [];
//     for(let i=0;i<n1;i++){
//         let val = nums1[i];
//         let ind = obj[val];
//         for(let j=ind;j<n2;j++){
//             if(j === n2-1){
//                 res.push(-1);
//             }else if(nums2[j+1] > val){
//                 res.push(nums2[j+1]);
//                 break;
//             }
//         }
//     }
//     console.log(res);
// }
// greater([4,1,2],[1,3,4,2]);

// function lc(nums1,nums2){
//     let count =0;
//     let obj = {};
//     let n1 = nums1.length;
//     let n2 = nums2.length;
//     for(let i=0;i<n2;i++){

//     }
// }
// lc([1,3,45][3,6,45,1,56]);

// function base(operations){
//     let stack = [];
//     let n = operations.length;
//     let count = 0;
//     let top = -1;
//     let sum = 0;
//     while(count < n){
//         if(operations[count] == '+'){
//             stack.push(+stack[top] + +stack[top-1]);
//             top++;
//             count++;
//             sum += stack[top];
//         }else if(operations[count] == 'D'){
//             stack.push(+stack[top] * 2);
//             count++;
//             top++;
//             sum += stack[top];
//         }
//         else if(operations[count] == 'C'){
//             sum -= stack[top];
//             stack.length = stack.length-1;
//             top--;
//             count++;

//         }else{
//             stack.push(+operations[count]);
//             top++;
//             count++;
//             sum += stack[top];
//         }
//     }
//     return sum;
// }

// let res = base(["5","-2","4","C","D","9","+","+"]);
// console.log(res);

// function backspace(s,t){
//     function helper(string){
//         let stack = [];
//         let n = string.length;
//         for(let i=0;i<n;i++){
//             if(string[i] == '#') stack.pop();
//             else{
//                 stack.push(string[i]);
//             }
//         }
//         return stack.join('');
//     }
//     return helper(s) === helper(t);
// }
// let res = backspace("c#d#c","a#b#c");
// console.log(res);

// function RemoveOuterMostParenthesis(S){
//     let stack = [];
//     let level = 0;
//     let prevLevel = 0;
//     let n = S.length;
//     for(let i=0;i<n;i++){
//         let curr = S[i];
//         if(curr === '('){
//             prevLevel = level;
//            level++; 
//         }else{
//             prevLevel = level;
//             level--;
//         }
//         if(!((prevLevel === 0 && level === 1) || (level === 0 && prevLevel === 1))){
//             stack.push(curr);
//         }
//     }
//     return stack.join('');
// }
// let res = RemoveOuterMostParenthesis("()(())((()()))");
// console.log(res);

// function removeDuplicates(s){
//     let n = s.length;
//     let stack = [];
//     let top = -1;
//     for(let i=0;i<n;i++){
//         let j=i+1;
//         if(s[i] == s[j]){
//             i+=2;
//             j+=2;
//         }
//         if(stack[top] == s[i]){
//             stack.pop();
//             top--;
//         }
//         else{
//             stack.push(s[i]);
//             top++;
//         }
//     }
//     return stack.join('');
// }
// let res = removeDuplicates("azxxzy");
// console.log(res);

//approach 2 -->
// function removeDuplicates2(s){
//     let stack = [];
//     let n = s.length;
//     for(let i=0;i<n;i++){
//         if(s[i] == stack[stack.length-1]){
//             stack.pop();
//         }
//         else{
//             stack.push(s[i]);
//         }
//     }
//     return stack.join('');
// }
// let res2 = removeDuplicates2("abbaca");
// console.log(res2);

//discount in a shop -->
// function discount(prices){
//     let stack = [];
//     let n = prices.length;
//     for(let i=0;i<n;i++){
//         let j=i+1;
//         if(i == n-1){
//             stack.push(prices[i]);
//         }
//         if(prices[j] <= prices[i]){
//             stack.push(prices[i]-prices[j]);
//         }else{
//             while(j<n){
//                 if(prices[i] > prices[j]){
//                     stack.push(prices[i]-prices[j]);
//                     j = n;
//                 }
//                 else if(j==n-1 && stack.length !== i+1){
//                     stack.push(prices[i]);
//                 }
//                 else{
//                     j++;
//                 }
//             }
//         }
//     }
//     return stack;
// }
// let prices = [8,4,7];
// let res = discount(prices);
// console.log(res);

//Make the string great -->
// function str(s){
//     let stack = [];
//     let n = s.length;
//     if(n === 0) return s;
//     for(let i=0;i<n;i++){
//         if(stack[stack.length-1] === s[i].toUpperCase() && stack[stack.length-1] !== s[i] || stack[stack.length-1] === s[i].toLowerCase() && stack[stack.length-1] !== s[i]){
//             stack.pop();
//         }
//         else{
//             stack.push(s[i]);
//         }
//     }
//     return stack.join('');
// }
// let res = str("abBAcC");
// console.log(res);

//Implement Queue Using Stacks -->
// class MyQueue{
//     constructor(){
//         this.pushStack = [];
//         this.popStack = [];
//     }
//     push(val){
//         this.pushStack.push(val);
//         // for(let i=this.pushStack.length-1;i>0;i--){
//         //     this.popStack.push(this.pushStack[i]);
//         // }
//     }
//     pop(){
//         if(!this.popStack.length){
//             for(let i=this.pushStack.length-1;i>=0;i--){
//                 this.popStack.push(this.pushStack[i]);
//                 this.pushStack.pop();
//             }
//             return this.popStack.pop();
//         }else{
//             return this.popStack.pop();
//         }
//     }
//     peek(){
//         if(!this.pushStack.length){
//             return this.popStack[this.popStack.length-1];
//         }else{
//             if(!this.popStack.length){
//                 for(let i=this.pushStack.length-1;i>=0;i--){
//                     this.popStack.push(this.pushStack[i]);
//                     this.pushStack.pop();
//                 }
//                 return this.popStack[this.popStack.length-1]
//             }else{
//                 return this.popStack[this.popStack.length-1];
//             }
//         }
//     }
//     empty(){
//         if(!this.popStack.length && !this.pushStack.length){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

//Crawler log folder-->
// function logFolder(logs){
    // let stack = [];
    // let n = logs.length;
    // for(let i=0;i<n;i++){
    //     if(logs[i] == '../'){
    //         stack.pop();
    //     }else if(logs[i] === './'){
    //         continue;
    //     }else{
    //         stack.push(logs[i]);
    //     }
    // }
    // return stack.length;
// }
// let res = logFolder(["d1/","../","../","../"]);
// console.log(res);

//Divide array into arrays with max difference -->
// function divide(nums,k){
//     let stack = [[]];
//     nums.sort((a,b)=>a-b);
//     let count = 0;
//     let level = 0;
//     let n = nums.length;
//     stack[0].push(nums[0]); 
//     for(let i=1;i<n;i++){
//         let j= 0;
//         level = 0;
//         while(j<stack[count].length){
//             if(Math.abs(stack[count][j] - nums[i]) <= k && stack[count].length <3){
//                 j++;
//             }else{
//                 level = 1;
//                 stack.push([]);
//                 count++;
//                 if(stack[count-1].length != 3) return [];
//                 stack[count].push(nums[i]);
//                 break;
//             }
//         }
//         if(level !== 1){
//             stack[count].push(nums[i]);
//         }
//     }
//     return stack;
// }
// const res = divide([1,3,4,8,7,9,3,5,1],2);
// console.log(res);

// function valid(s){
//     let open = 0;
//     let close = 0;
//     let n = s.length;
//     let maxLength = 0;
//     //Moving forward-->
//     for(let i=0;i<n;i++){
//         if(s[i]=='(') open++;
//         else close++;
//         if(open === close) maxLength = Math.max(maxLength,close+open);
//         if(close > open) {
//             close = 0;
//             open = 0;
//         }
//     }
//     close  = 0;
//     open = 0;
//     //Moving backward -->
//     for(let i=n;i>=0;i++){
//         if(s[i]==')') close++;
//         else open++;
//         if(open===close) maxLength = Math.max(maxLength,close+open);
//         if(open > close) {
//             close = 0;
//             open = 0;
//         }
//     }

//     return maxLength;
// }

// twoSum -->
// function twoSum(nums,target){
//     let n = nums.length;
//     let obj = {};
//     for(let i=0;i,n;i++){
//         let val = nums[i];
//         let complimentPair = target-val;
//         if(obj[complimentPair] !== undefined){
//             return [obj[complimentPair],i];
//         }else{
//             obj[val] = i;
//         }
//     }
// }
// const res = twoSum([3,4,7,2,9],6);
// console.log(res);

// function twoSum(nums,target){
//     let map  = new Map();
//     let n = nums.length;
//     for(let i =0;i<n;i++){
//         let val = nums[i];
//         let next = target - val;
//         if(map.has(next)){
//             return [map.get(next),i];
//         }else{
//             map.set(val,i);
//         }
//     }
// }
// const res = twoSum([3,2,3],6);
// console.log(res);

//next greater element -->
// function nextGreater(nums){
//     let stack = [];
//     let n = nums.length;
//     let nge = new Array(n);
//     stack.push(nums[n-1]);
//     for(let i=n-1;i>=0;i--){
//        while(stack[stack.length-1] <= nums[i] && stack[stack.length-1]){
//             stack.pop();
//        }
//        if(!stack[stack.length-1]){
//             nge[i] = -1;
//             stack.push(nums[i]);
//        }
//        if(nums[i] < stack[stack.length-1]){
//             nge[i] = stack[stack.length-1];
//             stack.push(nums[i]);
//        }
//     }
//     return nge;
// }
// let res = nextGreater([4,12,5,3,1,2,5,13,1,2,4,6]);
// console.log(res);


//Next Greater Element -->
// function nextGreater(nums){
//     let n = nums.length;
//     let nge = new Array(n);
//     let stack = [];
//     for(let i=n-1;i>=0;i--){
//         if(!stack[stack.length-1]){
//             stack.push(nums[i]);
//             nge[i] = -1;
//         }
//         else if(stack[stack.length-1] > nums[i]){
//             nge[i] = stack[stack.length-1];
//             stack.push(nums[i])
//         }else{
//             while(stack[stack.length-1] <= nums[i]){
//                 stack.pop();
//             }
//             if(!stack[stack.length-1]){
//                 nge[i] = -1;
//                 stack.push(nums[i])
//             }else{
//                 nge[i] = stack[stack.length-1];
//                 stack.push(nums[i]);
//             }
//         }
//     }
//     return nge;
// }
// let res = nextGreater([4,12,5,3,1,2,5,13,1,2,4,6]);
// console.log(res);

//previous smaller element -->

// let heights = [2,1,5,6,2,3];
//previous smaller element -->
// function previousSmallerElement(heights){
//     let stack = [];
//     let n = heights.length;
//     let pse = new Array(n);
//     for(let i=0;i<n;i++){
//         while(stack.length && heights[stack[stack.length-1]] >= heights[i]){
//             stack.pop();
//         }
//         if(!stack.length){
//             pse[i] = -1;
//             stack.push(i);
//         }else{
//             pse[i] = stack[stack.length-1];
//         }
//         stack.push(i);
//     }
//     return pse;
// }
// const res = previousSmallerElement(heights);
// console.log(res);
//next smaller element
// function nextSmallerElement(heights){
//     let stack = [];
//     let n = heights.length;
//     let nse = new Array(n);
//     for(let i=n-1;i>=0;i--){
//         while(stack.length && heights[stack[stack.length-1]] >= heights[i]){
//             stack.pop();
//         }
//         if(!stack.length){
//             nse[i] = n;
//             stack.push(i);
//         }else{
//             nse[i] = stack[stack.length-1];
//             stack.push(i);
//         }
//     }
//     return nse;
// }

// const res = nextSmallerElement(heights);
// console.log(res);
// function largestRectangle(heights){
//     let nse = nextSmallerElement(heights);
//     let pse = previousSmallerElement(heights);
//     let n = heights.length;
//     let area = 0;
//     for(let i=0;i<n;i++){
//         area = Math.max(area,(nse[i] - pse[i] -1 ) * heights[i]);
//     }
//     return area;
// }

// let res = largestRectangle(heights);
// console.log(res);

//Evaluate Reverse Polish Notation -->
// function PolishNotation(tokens){
//     let stack = [];
//     let n = tokens.length;
//     for(let i=0;i<n;i++){
//         if(tokens[i].match(/[0-9]/)){
//             stack.push(+tokens[i]);
//         }else{
//             let y = stack.pop();
//             let x = stack.pop();
//             if(tokens[i] == '+') stack.push(x+y);
//             else if(tokens[i] == '-') stack.push(x-y);
//             else if(tokens[i] == '*') stack.push(x*y);
//             else stack.push(parseInt(x/y));
//         }
//     }
//     return stack.pop();
// }
// const res = PolishNotation(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]);
// console.log(res);

//Maximal Rectangle -->
// function maxRectangle(matrix){
//     let currRow = matrix[0];
//     let maxArea = maxHistogram(currRow);
//     for(let i=1;i<matrix.length;i++){
//         for(let j=0;j<matrix[i].length;j++){
//             if(matrix[i][j] == 1){
//                 currRow[j]++;
//             }else currRow[j] = 0;
//         }
//         let currMaxArea = maxHistogram(currRow);
//         maxArea = Math.max(currMaxArea,maxArea);
//     }
//     return maxArea;
// }

// function maxHistogram(row){
//     let stack = [];
//     let nse = nextSmallerElement(row);
//     let pse = previousSmallerElement(row);
//     let maxArea = 0
//     for(let i=0;i<row.length;i++){
//         maxArea = Math.max(maxArea,(nse[i]-pse[i]-1)*row[i]);
//     }
//     return maxArea;
// }

// function previousSmallerElement(row){
//     let n = row.length;
//     let pse = new Array(n);
//     let stack = [];
//     for(let i=0;i<n;i++){
//         while(stack.length && row[stack[stack.length-1]] >= row[i]){
//             stack.pop();
//         }
//         if(!stack.length){
//             pse[i] = -1;
//             stack.push(i);
//         }else{
//             pse[i] = stack[stack.length-1];
//             stack.push(i);
//         }
//     }
//     return pse;
// }
// function nextSmallerElement(row){
//     let stack = [];
//     let n = row.length;
//     let nse = new Array(n);
//     for(let i=n-1;i>=0;i--){
//         while(stack.length && row[stack[stack.length-1]] >= row[i]){
//             stack.pop();
//         }
//         if(!stack.length){
//             nse[i] = n;
//             stack.push(i);
//         }else{
//             nse[i] = stack[stack.length-1];
//             stack.push(i);
//         }
//     }
//     return nse;
// }
// const res = maxRectangle([['1']]);
// console.log(res);

//First Unique Character in a string -->
// function firstUniqueChar(s){
//     let obj = {};
//     let n = s.length;
//     for(let i=0;i<n;i++){
//         obj[s[i]] = obj[s[i]] ? obj[s[i]] +1 : 1;
//     }
//     for(let i=0;i<n;i++){
//         if(obj[s[i]] == 1) return i;
//     }
//     return -1;
// }
// const res = firstUniqueChar('aabcb');
// console.log(res);

//Longest Common Prefix -->
// function CommonPrefix(strs){
//     let n = strs.length;
//     if(!n) return "";
//     for(let i=0;i<strs[0].length;i++){
//         for(let j=1;j<n;j++){
//             if(strs[0][i] !== strs[j][i]){
//                 return strs[0].slice(0,i);
//             }
//         }
//     }
//     return strs[0];
// }
// const res = CommonPrefix(["flower","flow","flight"]);
// console.log(res);

//Number Of recent Calls --> Queue Based

// const recentCalls = function(){
//     this.queue = [];
// }
// recentCalls.prototype.ping = function(t){
//     if(this.queue.length == 0){
//         this.queue.push(t);
//         return 1;
//     }
//     else{
//         if(t < 3000){
//             this.queue.push(t);
//             return this.queue.length;
//         }else{
//             let margin = t - 3000;
//             while(this.queue.length && queue[0] < margin){
//                 this.queue.shift();
//             }
//             this.queue.push(t);
//             return this.queue.length;
//         }
//     }
// }

//Question : NUmber of students not able to eat -->
// function countStudents(students,sandwiches){
//     let count = 0;
//     while(students.length && sandwiches.length){
//         if(students[0] == sandwiches[0]){
//             students.shift();
//             sandwiches.shift();
//             count = 0;
//         }else{
//             let val = students.shift();
//             students.push(val);
//             count++;
//             if(count == students.length) break;   
//         }
//     }
//     return students.length;
// }
// const res = countStudents([1,1,1,0,0,1],[1,0,0,0,1,1]);
// console.log(res);//3

//Time needed to buy tickets -->
// function buyTickets(tickets , k){
//     let sec = 0; 
//     let queue = [];
//     for(let i=0;i<tickets.length;i++){
//         queue.push(i);
//     }
//     while(true){
//         if(tickets[k] == 0) break;
//         let curr = queue[0];
//         tickets[curr]--;
//         sec++;
//         queue.shift();
//         if(tickets[curr] != 0){
//             queue.push(curr);
//         }
//     }
//     return sec;
// }
// const res = buyTickets([5,1,1,1],0);
// console.log(res);

// class MyStack{
//     constructor(){
//         this.pushQueue = [];
//         this.popQueue  = [];
//     }
//     push(x){
//         this.pushQueue.push(x);
//     }
//     pop(){
//         while(this.pushQueue.length){
//             this.popQueue.unshift(this.pushQueue.shift());
//         }
//         return this.popQueue.shift();
//     }
//     top(){
//         if(this.pushQueue.length) return this.pushQueue[0];
//         else return this.popQueue[this.popQueue.length-1];
//     }
//     empty(){
//         if(!this.pushQueue.length && !this.popQueue.length) return true;
//         else return false;
//     }
// }
// let obj = new MyStack();
// obj.push(1);
// obj.push(2);
// console.log(obj.top());

//Circular Queue -->
// class Queue{
//     constructor(k){
//         this.queue = new Array(5).fill(-1);
//         this.max = k;
//         this.front = 0;
//         this.rear = -1;
//         this.size = 0;
//     }
    
//     isEmpty(){
//         return this.size == 0;
//     }
//     isFull(){
//         return this.size == this.max;
//     }
//     enqueue(val){
//         if(this.isFull()){
//             return false;
//         }
//         this.rear = (this.rear + 1)%this.max;
//         this.queue[this.rear] = val;
//         this.size++;
//         return true;
//     }
//     dequeue(){
//         if(this.isEmpty()) return false;
//         this.queue[this.front] = -1;
//         this.front = (this.front+1)%this.max;
//         this.size--;
//         return true;
//     }
//     Front(){
//         return this.queue[this.front];
//     }
//     Rear(){
//         return this.queue[this.rear];
//     }
// }
// const obj = new Queue(5);
// console.log(obj.enqueue(23));
// console.log(obj.enqueue(12));
// console.log(obj.enqueue(3));
// console.log(obj.enqueue(31));
// console.log(obj.enqueue(32));
// console.log(obj.enqueue(22));
// console.log(obj.dequeue());
// console.log(obj.dequeue());
// console.log(obj.dequeue());
// console.log(obj.enqueue(23));
// console.log(obj.enqueue(250));
// console.log(obj.enqueue(43));
// console.log(obj.Front());
// console.log(obj.Rear());
// console.log(obj.queue);

//Circular Double Ended Queue -->
// class MyCircularDeque{
//     constructor(k){
//         this.Dequeue = new Array(k).fill(-1);
//         this.front = -1;
//         this.rear = -1;
//         this.max = k;
//         this.size = 0;
//     }
//     insertFront(val){
//         if(!this.isFull()){
//             this.front = (this.front - 1 + this.max) % this.max;
//             this.Dequeue[this.front] = val;
//             this.size++;
//             return true;
//         }
//         return false;
//     }
//     insertLast(val){
//         if(!this.isFull()){
//             this.rear = (this.rear+1)%this.max;//modulo/circular increment
//             this.Dequeue[this.rear] = val;
//             this.size++;
//             return true;
//         }
//         return false;
//     }
//     deleteFront(){
//         if(!this.isEmpty()){
//             this.Dequeue[this.front] = -1;
//             this.front = (this.front - 1 + this.max) % this.max;
//             this.size--;
//             return true;
//         }
//         return false;
//     }
//     deleteLast(){
//         if(!this.isEmpty()){
//             this.Dequeue[this.rear] = -1;
//             this.rear = (this.rear -1) % this.max;
//             this.size--;
//             return true;
//         }
//         return false;
//     }
//     getFront(){
//         return this.Dequeue[this.front];
//     }
//     getRear(){
//         return this.Dequeue[this.rear];
//     }
//     isEmpty(){
//         return this.size == 0;
//     }
//     isFull(){
//         return this.size == this.max;
//     }
// }

// Sliding Window maximum -->
// function maxSlidingWindow(nums,k){
//     let res = [];
//     let deque = [];
//     let n = nums.length;
//     for(let i=0;i<n;i++){
//         if(deque.length && deque[0] <= i-k){
//             deque.shift();
//         }
//         while(deque.length && nums[deque[deque.length-1]] <= nums[i]){
//             deque.pop();
//         }
//         deque.push(i);
//         if(i >= k-1){
//             res.push(nums[deque[0]]);
//         }
//     }
//     return res;
// }
// const res = maxSlidingWindow([1,3,-1,-3,5,3,6,7],3);
// console.log(res);

//Intersection of two arrays -->
// function interSection(nums1,nums2){
//     nums1.sort((a,b)=>a-b);
//     nums2.sort((a,b)=>a-b);
//     let res = new Set();
//     let stack = [...nums1];
//     for(let i=0;i<nums2.length;i++){
//         let curr= nums2[i];
//         if(curr == stack[stack.length-1]){
//             res.add(curr);
//             stack.pop();
//         }
//         else if(curr > stack[stack.length-1]){
//             continue;
//         }
//         else{
//             let top = stack.length -2;
//             while(top >= 0){
//                 if(stack[top] == curr){
//                     res.add(curr);
//                 }
//                 top--;
//             }
//         }
//     }
//     return [...res];
// }
// const res = interSection([4,9,5],[9,4,9,8,4]);
// console.log(res);

//Count subarrays with fixed bounds --> 
// function subArraysWithFixedBounds(nums,mink,maxk){
//     let minPosition = -1;
//     let maxPosition = -1;
//     let culpritIndex = -1;
//     let res = 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] == mink) minPosition = i;
//         if(nums[i] == maxk) maxPosition = i;
//         if(nums[i] > maxk || nums[i] < mink) culpritIndex = i;
//         let bound = Math.min(minPosition,maxPosition);
//         let temp = bound - culpritIndex;
//         res += temp <= 0 ? 0 :temp; 
//     }
//     return res;
// }
// const res = subArraysWithFixedBounds([1,3,5,2,7,5],1,5);
// console.log(res);

//Shortest subarray with sum at least k-->
// function subArrayWithSumK(nums,k){
//     let queue = [];
//     let n = nums.length;
//     let shortest = n+1;
//     //create a monotonic queue of prefix sum-->
//     for(let i=0;i<n;i++){
//         if(!queue.length){
//             queue.push({val:nums[0],index:0});
//             continue;
//         } 
//         let sum = queue[queue.length-1].val + nums[i];
//         while(queue.length && queue[queue.length-1].val > sum){
//             queue.pop();
//         }
//         queue.push({val:sum,index:i});
//     }
    
//     for(let i=0;i<queue.length;i++){
//         if(queue[i].val >= k){
//             shortest = Math.min(queue[i].index +1,shortest);
//         }
//     }
//     let max = queue[queue.length-1].val;
//     for(let i=0;i<queue.length;i++){
//         let curr = queue[0].val;
//         if(max - curr >= k){
//             queue.shift();
//             shortest = Math.min(shortest,queue[queue.length-1].index - queue[0].index + 1)
//         }
//     }
//     if(shortest == n+1){
//         return -1;
//     }else{
//         return shortest;
//     }
// }
// const res = subArrayWithSumK([17,85,93,-45,-21],150); 
// console.log(res);

//Maximum Sum Circular subarray -->
// function maximumSumCircularSubarray(nums){
//     let currMin = 0,currMax = 0,sum = 0,minSum = nums[0],maxSum = nums[0];
//     for(let num of nums){
//         sum += num;
//         currMax = Math.max(currMax , 0) + num;
//         maxSum = Math.max(currMax,maxSum);
//         currMin = Math.min(currMin , 0) + num;
//         minSum = Math.min(currMin,minSum);
//     }
//     return sum == minSum ? maxSum :Math.max(sum - minSum,maxSum);
// }
// const res = maximumSumCircularSubarray([1,-2,3,-2]);
// console.log(res);

//Design Circular DEque-->
// class MyCircularDeque{
//     constructor(k){
//         this.Dequeue = new Array(k).fill(-1);
//         this.front = 0;
//         this.rear = 0;
//         this.max = k;
//         this.size = 0;
//     }
//     insertFront(val){
//         if(!this.isFull()){
//             this.Dequeue[this.front] = val;
//             this.front = (this.front - 1 + this.max) % this.max;
//             this.size++;
//             return true;
//         }
//         return false;
//     }
//     insertLast(val){
//         if(!this.isFull()){
//             this.Dequeue[this.rear] = val;
//             this.rear = (this.rear+1)%this.max;//modulo/circular increment
//             this.size++;
//             return true;
//         }
//         return false;
//     }
//     deleteFront(){
//         if(!this.isEmpty()){
//             this.Dequeue[this.front] = -1;
//             this.front = (this.front - 1 + this.max) % this.max;
//             this.size--;
//             return true;
//         }
//         return false;
//     }
//     deleteLast(){
//         if(!this.isEmpty()){
//             this.Dequeue[this.rear] = -1;
//             this.rear = (this.rear -1) % this.max;
//             this.size--;
//             return true;
//         }
//         return false;
//     }
//     getFront(){
//         return this.Dequeue[this.front];
//     }
//     getRear(){
//         return this.Dequeue[(this.rear -1 + this.max )%this.max];
//     }
//     isEmpty(){
//         return this.size == 0;
//     }
//     isFull(){
//         return this.size == this.max;
//     }
// }

//Find all duplicate element in array in constant space -->
// function FindDuplicates(nums){
//     let n = nums.length;
//     let res = [];
//     for(let i=0;i<n;i++){
//         let absVal = Math.abs(nums[i]);
//         indToCheck = absVal - 1;
//         if(nums[indToCheck] < 0){
//             res.push(absVal);
//         }else{
//             nums[indToCheck] *= -1;
//         }
//     } 
//     return res;
// }
// const res = FindDuplicates([]);
// console.log(res);

//Reveal cards in increasing order-->

// var deckRevealedIncreasing = function(deck) {
//     deck.sort((a,b)=>a-b);
//     let n = deck.length;
//     let ans = new Array(n);
//     let q = [];
//     for(let i=0;i<n;i++){
//         q.push(i);
//     }
//     for(let i=0;i<n;i++){
//         ans[q.shift()] = deck[i];
//         if(q.length){
//             q.push(q.shift());
//         }
//     }
//     return ans;
// };
// const res = deckRevealedIncreasing([17,13,11,2,3,5,7]);
// console.log(res);

//Constrained Subsequence sum -->
//it is a Brute force Approach which takes time complexity of O(n*k);
//where the n is length of elements in nums and k is size of dp
// var constrainedSubsetSum = function(nums, k) {
//     let n = nums.length;
//     let dp = new Array(n).fill(0);
//     for(let i=0;i<n;i++){
//         dp[i] = nums[i];
//         for(let j=Math.max(0,i-k);j<i;j++){
//             dp[i] = Math.max(dp[i],nums[i]+dp[j]);
//         }
//     }
//     let res = dp[0];
//     for(let i=1;i<n;i++){
//         res = Math.max(res,dp[i]);
//     }
//     return res;
// };
// const res = constrainedSubsetSum([10,-2,-10,-5,20],2);
// console.log(res);

//Optimized Code -->
// var constrainedSubsetSum = function(nums, k) {
//     let n = nums.length;
//     let Dq = new Array();
//     let maxSum = nums[0];
//     for(let i=0;i<n;i++){
//         nums[i] += Dq.length ? Dq[0] : 0;
//         maxSum = Math.max(maxSum,nums[i]);
//         while(Dq.length && nums[i] >= Dq[Dq.length-1]){
//             Dq.pop();
//         }
//         if(nums[i] > 0){
//             Dq.push(nums[i]);
//         }
//         if(Dq.length && i >= k && Dq[0] == nums[i-k]){
//             Dq.shift();
//         }
//     }
//     return maxSum;
// };
// const res = constrainedSubsetSum([10,-2,-10,-5,20],2);
// console.log(res);

//Minimum Size Subarray Sum -->
//Brute Force Approach --> TimeComplexity O(n*n)
// var minSubArrayLen = function(target, nums) {
//     let n = nums.length;
//     let res = n+1;
//     for(let i=0;i<n;i++){
//         let inter = n+1;
//         let val = nums[i];
//         if(val >= target) return 1;
//         for(let j=i+1;j<n;j++){
//             if(val + nums[j] >= target){
//                 inter = j-i+1;
//                 break;
//             }
//         }
//         res = Math.min(inter,res);
//     }
//     return res == n+1 ? 0 : res;
// };
// const res = minSubArrayLen(11,[1,1,1,1,1,1,1,1])
// console.log(res);

//Sliding Window approach to solve this question -->
//Time Complexity --> O(n)
// var minSubArrayLen = function(target, nums) {
//     let sum = 0;
//     let right = 0;
//     let left = 0;
//     let shortest  = Number.MAX_VALUE;
//     let n = nums.length;
//     while(right < n){
//         sum += nums[right];
//         if(sum >= target){
//             while(sum >= target){
//                 sum -= nums[left];
//                 left++; 
//             }
//             shortest = Math.min(shortest,(right-left +1)+1);
//         }
//         right++;
//     }
//     return shortest == Number.MAX_VALUE ? 0 : shortest;
// }
// const res = minSubArrayLen(7,[2,3,1,2,4,3])
// console.log(res);

//Shortest subarray with sum at least k -->
// var shortestSubarray = function(nums, k) {
//     let n = nums.length;
//     let shortest = Number.MAX_VALUE;
//     let sum = 0;
//     let dq = new Array();
//     //find the shortest compress the window size -->
//     for(let i=0;i<n;i++){
//         if(nums[i] >= k) return 1;
//         sum += nums[i];
//         if(sum >= k) shortest = Math.min(shortest,i+1);
//         while(dq.length && sum <= dq[dq.length-1][0]){
//             dq.pop();
//         } 
//         dq.push([sum,i]);
//     }
//     console.log(shortest);
//     //traverse the dq and find the shortest -->
//     while(dq[dq.length-1][0] - dq[0][0] >= k){
//         dq.shift();
//         shortest = Math.min(shortest,dq[dq.length-1][1] - dq[0][0]);
//     }
//     return shortest == Number.MAX_VALUE ? -1 : shortest;
// }
// const res = shortestSubarray([77,19,35,10,-14],19);
// console.log(res);

//Product of last k Element --> TimeComplexity O(1)
// var ProductOfNumbers = function(){
//     this.prefix = [1];    
// }
// ProductOfNumbers.prototype.add = function(num){
//     if(num == 0){
//         this.prefix = [1];
//     }else{
//         this.prefix.push(num);
//     }
// }
// ProductOfNumbers.prototype.getProduct = function(k){
//     let n = this.prefix.length;
//     if(n-k-1 < 0){
//         return 0;
//     }else{
//         return this.prefix[n-1]/this.prefix[n-k-1];
//     }
// }

//Linked List -->
//Qu : Merge two sorted list -->
