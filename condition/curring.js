

function add(a,b,c){
    return a,b,c
}


function curring(a){
    return function(b){
        return function (c){
            return a +b + c
        }
    }
}


var result = curring(5)(2)(6)

console.log(result);