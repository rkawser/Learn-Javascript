//expressions

var expire =function(a,b){
    return (a+b)
}

console.log(expire(20,1));

setTimeout(function(){
    console.log('hello world');
},5000)



//return statements

// function simple(a,b){
//     return ( a+b);
// }

// var result =simple(2,3)
// console.log(result);


//power of arguments

//var arr4=[1,2,3,4,5,6,7,8,9,10]

// function additionOfarguments(){
//     var sum = 0
//     for(var i=0;i<arguments.length;i++){

//         sum +=arguments[i]
//     }
//     console.log(sum);
// }

// additionOfarguments(1,2,3,4,5,6,7,8,9,10)

// function functionOfargument(a,b,c){

//     console.log(arguments);
// }
// functionOfargument(10,20,30,40,50)

//////////////////////////////////////////////////////

//function of array simple problem and introduction argument
// var arr1=[1,2,5]
// var arr2=[7,8,5]
// var arr3=[9,6,1]

// function functionOfarray(sum){
//     var totalSum=0;
//     for(var i=0; i<sum.length; i++){
//        totalSum +=sum[i]
//     }
//     console.log(totalSum);
// }

// functionOfarray(arr1)
// functionOfarray(arr2)