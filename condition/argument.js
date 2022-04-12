

// function add (a,b,c){
//     console.log(arguments);
// }
// add()

// function add (){
//     console.log(arguments);
// }
// add('a','b','c')


// function addi(a,b){
//     var sum=0;
//     for(var i=0;i<arguments.length;i++){

//         sum += arguments[i]
//     }

//     console.log(sum);
// }

// addi(1,2,3,4,5)


function addi(){
    var sum=0;
    for(var i=0;i<arguments.length;i++){

        sum += arguments[i]
    }

    console.log(sum);
}

addi(1,2,3,4,5)