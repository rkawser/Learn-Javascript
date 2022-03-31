//function Of innerFunction

function practice(greting,name){
    function just(){
        if(name){
            return name.split(' ')[0]
        }
        else{
            console.log(' ');
        }
    }
        var message = greting +' '+ just()
    console.log(message);
}


practice('good morning', 'raihan kawser')

function simple(a,b){
 function simple2(){
        console.log('hello mr. ' +' '+ a , ' do you like ' , b );
    }
    simple2()
}

simple('kawser','cofree')