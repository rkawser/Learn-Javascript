


function Person(name){

      this.name= name
}


var P1= new Person('HM Nayem')

console.log(P1);

console.log(Object.getPrototypeOf(P1));

console.log( Person.prototype);
console.log();