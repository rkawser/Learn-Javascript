
var arr =[99,1,2,3,4,5]


var reduce= arr.reduce(function(pre,curr){
    return  pre + curr
},100)


console.log(reduce);


//max number 

var max = arr.reduce(function(pre,curr){
        return Math.max(pre,curr)
})


console.log(max);

//emplement 

function reduced(arr,cb,acc){
    for(var i=0;i<arr.length;i++){
        acc = cb(acc,arr[i])
    }

    return acc ;
}


console.log(reduced(arr,function(pre,curr){
    return pre + curr
},100));