

//pure functions


// function pure(n){   
//     return n*n
// }
// console.log(pure(10));


//note pure function exmple


var point ={
    a:10,
    b:20
}

function pointed(point){

    point.a=100
    point.b=200
    console.log(point);
}

pointed(point)

console.log(point);