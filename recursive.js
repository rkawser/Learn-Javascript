
// function sayHi(A){

//     if(A===0){
//         return 'hi'
//     }
//     console.log( 'im looking for function');
//     sayHi(A-2)
// }

// sayHi(10)


function sum(n){
if(n===1){
return 1
}
return n+sum(n-1)
}

console.log(sum(5));