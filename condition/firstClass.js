
//first class function conditions:


//1. A function can be stotred in a varible 

function add(a){
    return  a+a
}

var addjust= add

 console.log(addjust(10));




//2. A function can be stored in an array

var arr=[]

arr.push(addjust)

console.log( arr[0](3));

//3. A funtion can be stored in an object

var obj ={
    a:addjust
}

console.log(obj.a(6));


//4.we can create function as need

setTimeout(function(){
    console.log('i will come you call after 5 secound');
},5000)