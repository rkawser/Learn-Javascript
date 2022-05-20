var a =100
var result = hoisting
result(10)

hoisting(20)


function hoisting(a){
    console.log(a);
}

hoisting(a)