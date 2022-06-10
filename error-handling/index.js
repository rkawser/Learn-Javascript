
// 1.error-handling with if else 

// function changeToInt (v){
//     let result = Number.parseInt(v)

//     if(!result){
//         console.log('please provide the valide number');
//         return
//     }

//     return result
// }


// let result = changeToInt('84')

// console.log(result);



//2.Error-handling with :try catch



// function makeWords (text){

//     try {

//         let str = text.trim()
//         let word = str.split(' ')

//         return word
        
//     } catch (e) {
//         console.log('please provide a valid text');
//     }
// }

// let result = makeWords(564)

// console.log(result);


// 3.Error throw 

// try {
//     console.log('line number 1');
//     console.log('line number 2');
//     throw new Error('I am your Error ')
//     console.log('line number 3');

// } catch (e) {
//     console.log(e.message);
// }


//4. finally block

// try {
//         console.log('line number 1');
//         console.log('line number 2');
//         throw new Error('I am your Error ')
//         console.log('line number 3');
    
//     } 
//     catch (e) {
//         console.log(e.message);
//     }
//     finally{
//         console.log('I am your finally block');
//     }
    


// 5. custom message 


// try {
//     console.log('line number 1');
//     console.log('line number 2');
//     throw new Error('I am your Error ')
//     console.log('line number 3');

// } 
// catch{
//     console.log('This is custom  message');
// }
// finally{
//     console.log('I am your finally block');
// }
