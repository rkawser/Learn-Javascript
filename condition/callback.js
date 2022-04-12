

function sample(a,b,func){
    var c= a-b
    var d= a+b

    var result = func(c,d)

    return result;
}

function addition(a,b){
    return a+b
}

var result= sample(5,8,addition)
console.log(result);


var result2 = sample(5,8,function(y,u){
    return y -u
})

console.log(result2);