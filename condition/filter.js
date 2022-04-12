
//var arr =[1,25,6,12,36,8,9,4]


// var filtered = arr.filter(function(value){
//     return value % 2 === 0
// })

// console.log(filtered);
// console.log(arr);


var arr =[1,25,6,12,36,8,9,4]

// function filterem(arr){
//     var newAarr=[]
//     for(var i=0; i<arr.length; i++){
//         if(arr[i] %2===0){
//             newAarr.push(arr[i])
//         }      
//     }
//        return newAarr
// }
// console.log(filterem(arr));

//callback with filter function


function filterCb(arr,cb){
    var newAarr=[]
    for(var i=0; i<arr.length;i++){
        if(cb(arr[i])){
            newAarr.push(arr[i])
        }
    }
    return newAarr;
}

console.log(filterCb(arr,function(value){
    return value % 2===0
}));