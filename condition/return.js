

function func(a){

    return function(b){
        var result =1
        for(var i=0; i<a; i++){
                result *= b
        }
        return result
    }

    
}

var result1 = func(10)

console.log(result1(2));