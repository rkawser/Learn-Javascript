//closure: jodi kono scopre ar vitor baire scopre teke kono data ase 
//tahole take closure bole,, and kono poker argument sara


// var b= 10

// function a(){
//     var x=5

//     return function(){
//         console.log(x);
//     }
// }

// var abc = a()

// console.dir(abc);


// function text(){
   
//     var msg = 'I am closure in function' 
  
//   return function(){
//         console.log(msg);
//     }

    
// }


// var result=text()

// result()


//closure in loops

var array=['r','a','i','h','a','n','o']

for(var i=1;i<=5;i++){
    function n(i){
        setTimeout(function(){
            console.log(i);
        },2000*array[i])
    }n(i)
    
}