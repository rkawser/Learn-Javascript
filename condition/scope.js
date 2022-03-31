
//scope hosse, akta variable diclure korlam variable ti kothai kothai teke access nite parbo, atai scope|| akane doita bisoy kaj kore 1.global scope and  2.local scope || global scope: ata sob jaiga teke access kora jai,, kinto local scope: ata nij scope ar baire access kora jai na, example: function

var b='im global scope'

function state(){
    //var b=20;
   function sstr(){
       console.log(b);
   }
   sstr()
}

//console.log(b);

state()





// var a='I am a simple boy'

// function example(){
// console.log(a);
// }
// example()

//\\\\\\\\\

// var a= 10;

// function just(n){
//     function just2(){
//         return n%3===0
//     }

//     function just3(){
//         return n%3===0
//     }

//     if(just2() && just3()){
//         console.log(n + ' is divisible by both 3 and 5 ');
//     }else{
//         console.log('not a number');
//     }
// }

// just(9)