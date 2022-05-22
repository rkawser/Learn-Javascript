//rest & sread operator 

//amra jokun kono function ar peramiter jonno ... use korbo tokun atake 
//rest operator bolbo|| ta sara jekuno jai gai use korle atake spread operator bolbo 


//exmple:

//Rest operator

function sumExtra(...rest){
   return rest.reduce((a,b)=>a+b)
}

console.log(sumExtra(1,2,3,4,5));


//spread operator

let arr=[1,2,3,4,5]

//simple:
console.log(arr);
// spread operator:
console.log(...arr);


let obj ={
    a:10,
    b:20
}

console.log(obj);

let obj2={
    ...obj
}

console.log(obj2);