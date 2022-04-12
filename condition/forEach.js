
 var arr=[1,2,3,4,5]

// var sum= 0;
// arr.forEach(function(value,index,arr){
//     sum+=value +5

// })

// console.log(sum);


function forsimle(arr,cb){

for(var i=0;i<arr.length;i++){
 cb(arr[i],i,arr)
}
}

 forsimle(arr,function(value,index,arr){
    arr[index]= value +9
})

console.log(arr);