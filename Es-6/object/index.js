//object ar keys and value same hole,, amra sodu akta diclure korle hoye jabe

//akon teke obj ar modde function diclure korle sodu function ar name likle 
//hobe funcction likte hobe na 

//avabe variable diclure kora jai just WOW

// let a=10,b=20,c=30

// let obj={
//     a,
//     b,
//     c,

//     simple(){

//         console.log(this);
//     }
// }

// console.log(obj);

// obj.simple()




//ery very very very very very important : Destructuring


//Destructuring: mane konu object ba arry stackture ke vegye fela,


let obj3={
    name:'Raihan Kawser',
    email:'raihankawser29@gmail.com',
    adress:{
        city:'pabna',
        country:'Bangladesh',
    }
}

//Object Destructuring:

let{name,email, adress, adress:{city}}=obj3

console.log(name,email,adress);



//Array destructuring :

//array destructuring hoi inddex ar upor follow kore,, 
//niser code vlo kore  dekle boja jabe.....
// ami jodi koma diye diye kaj kore tahole hobe, index count hobe 
let arr2=[1,2,3,4,5]


let [first,second, , , last]= arr2


console.log(first,second,last);