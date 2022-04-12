
//note : kaj ar jonno onek somoy array number change kora lagse
var array =[54,56,14,22,6,1]


//array.sort()

// array.sort(function(a,b){
//     if(a>b){
//         return -1
//     }

//     if(a<b){
//         return 1
//     }

//     else{
//          return 0
//     }
// })

// console.log(array);

//every


// var result =array.every(function(value){
//     return value %2 ===0
// })

// console.log(result);


//some

var result2= array.some(function(value){
        return value %2 ===1
})

console.log(result2);