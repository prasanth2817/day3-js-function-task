// Our task is to print the odd numbers in the array
// 1.using Functions:

// var odd=[];
// function array(arr){
//     for (var i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//             odd.push((arr[i]));
//         }     
//     }
//     return odd;
// }
// console.log(array([1,2,3,4,5,6]));

// 2.Using Anonyomus function:

// var odd2=[];
// var array= function (arr) {
//     for (var i=0;i<arr.length;i++)
//     {
//         if(arr[i]%2!==0){
//             odd2.push((arr[i]));
//         }     
//     }
//     return odd2;
// }
// console.log(array([12,13,14,15,16,17]))

// 3.IIFE :

// (function oddout(arr) {
//     var odd3=[];
//         for(var i=0;i<arr.length;i++){
//             if(arr[i]%2!==0){
//                 odd3.push(arr[i]);
//             }     
//         }
//         console.log(odd3);
//     })
//     ((([11,22,33,44,55,66])));

// 4.Arrow function:

// const A= (arr)=>{
//     var odd4=[];
//     for (var i=0;i<arr.length;i++)
//         {
//            if(arr[i]%2!==0){
//             odd4.push((arr[i]));
//            }     
//         }
//         return odd4;
// }
// console.log(A([15,52,36,88,17,27]))

// sum of all numbers in an array
// 1.using base function

// let inp= [1,2,3,4,5,6];
// let out=0
// function sum(inp){
//     for(var i=0;i<inp.length;i++){
//         out+=inp[i];
//     }
//     return out;
// }
// console.log(sum(inp));

// 2.using anonyomus function

// let inp= [1,9,3,8,5,6];

// const a= function (inp){
//     let out=0
//     for(var i=0;i<inp.length;i++){
//         out+=inp[i];
//     }
//     return out;
// }
// console.log(a(inp));

// 3.IIFE method

// (function arr(inp)
// {
//     let out=0;
//     for(var i=0;i<inp.length;i++){
//         out+= inp[i];
//     }
//     console.log(out);
// })
// (([5,8,6,6,3]));

// 4.using arrow function()

// const a=  (inp)=>{
//     let out=0;
//     for(let i=0;i<inp.length;i++){
//         out+= inp[i];
//     }
//     return out;
// }
// console.log(a([5,8,6,1,9,3]))

// Return all the palindrome in  the array

// 1.using functions

// let inp=["121","string","malayalam","level","madam","civil"];
// let arr=[];
// let rev=[];
//  function palindrome(inp){
//     for(let i=0;i<inp.length;i++){
//         arr.push(inp[i].split("").reverse().join(""));
//     if(inp[i]===(arr[i]))
//        {
//            rev.push(inp[i]);
//         }
//     }
//      return rev;
// }
//  console.log(palindrome(inp));

// 2.IIFE:

// let inp=["121","string","malayalam","level","madam","civil"];

//  (function palindrome(inp){
//     let arr=[];
//    let rev=[];
//     for(let i=0;i<inp.length;i++){
 
//         arr.push(inp[i].split("").reverse().join(""));
//     if(inp[i]===(arr[i]))
//        {
//            rev.push(inp[i]);
//         }
//     }
//  console.log(rev)
// })((inp));

// 3.Anonyomus method:

// let inp=["121","string","malayalam","level","madam","civil"];
// let arr=[];
// let rev=[];
//  let R=function (inp) {
//     for(let i=0;i<inp.length;i++){
//         arr.push(inp[i].split("").reverse().join(""));
//     if(inp[i]===(arr[i]))
//        {
//            rev.push(inp[i]);
//         }
//     }
//      return rev;
// }
//  console.log(R(inp));
 
//  4.Arrow function:

// let inp=["121","string","malayalam","level","madam","civil"];
// let arr=[];
// let rev=[];
//  let R= (inp)=> {
//     for(let i=0;i<inp.length;i++){
//         arr.push(inp[i].split("").reverse().join(""));
//     if(inp[i]===(arr[i]))
//        {
//            rev.push(inp[i]);
//         }
//     }
//      return rev;
// }
//  console.log(R(inp));

