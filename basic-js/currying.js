// non currying version 
function add(a,b,c){
    return a+b+c
}

console.log(add(2,2,2));

// currying version

function sum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

var result = sum(2)(5)(8)

console.log(result);