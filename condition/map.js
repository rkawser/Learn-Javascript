

var arr =[1,2,3,4,5]


// var firstMap = arr.map(function(value){
//     return value * value
// })

// console.log(arr);
// console.log(firstMap);


//empliment

// function myMap(arr){
//         var str =[]
//     for(var i=0; i<arr.length; i++){

//         str.push(arr[i] +10)
//     }
//     return str
// }

// console.log(myMap(arr));


function myMap(arr,cb){
    var str =[]
for(var i=0; i<arr.length; i++){
    var temp = cb(arr[i])
    str.push(temp)
}
return str
}

var result = myMap(arr,function(value){
    return value * value
})


var result2 = myMap(arr,function(value){
    return value * 2
})


var result3 = myMap(arr,function(value){
    return value * value *value
})


console.log(result);

console.log(result2);

console.log(result3);