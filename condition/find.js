
var arr =[1,2,3,4,5,87,96,33]


var result = arr.find(function(value){
    return value ===33
})

console.log(result);

var result2 = arr.findIndex(function(value){
    return value ===33
})

console.log(result2);

//empliment:


function myFind (arr,cb){
    for(var i=0;i<arr.length; i++){
        if(cb(arr[[i]])){

            return arr[i]
        }        

    }
}

console.log(myFind(arr,function(value){
        return value ===33
}));