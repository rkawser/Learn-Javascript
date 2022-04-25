//function composition : first function ar argument akare secound function ar out deuya ke functional composition bole 

//exmple: 


// function firstFunc(print){
//     console.log(print);
// }

// function secoiund(n){
//     return n*5
// }

// function third(a,b){
//     return a+b
// }


// firstFunc(secoiund(third(8,5)))


function print (prints){
    console.log(prints);
}

function multiple(c){
    return  c*2
}

function simple(a){
    return a*5
}


print(multiple(simple(2)))