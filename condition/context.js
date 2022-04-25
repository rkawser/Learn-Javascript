
console.log('i am global');


function  a (){
    b()
    console.log('i am a function');
}


function b(){
    d()
    console.log('i am b  function');
}


function c (){
  
    console.log('i am c function');
}


function d(){
    c()
    console.log('i am d function');
}


a()


//execution of c function
//execution of d function
//execution of b function
//execution of a function
