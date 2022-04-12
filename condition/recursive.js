


// function sayhi (n){
//     if(n===0){
//         return 1
//     }
//     console.log('hi, im calling');

//     sayhi(n - 1)
// }

// sayhi(5)


//factorial


function fact(n){
    if(n===1){
        return 1
    }

    return n * fact(n-1)
}

console.log(fact(5));
