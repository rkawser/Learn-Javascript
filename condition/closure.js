//closure: jodi kono scopre ar vitor baire scopre teke kono data ase 
//tahole take closure bole,, and kono poker argument sara


var b= 10

function a(){
    var x=5

    return function(){
        console.log(x);
    }
}

var abc = a()

console.dir(abc);
