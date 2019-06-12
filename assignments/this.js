/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - this will refer to the whole window/console 
* 2. Implicit Binding- uses a dot and refers to the obj after the dot 
* 3. New Binding- this will refer to the obj that is created and returned by a constructor 
* 4. Explicit Binding- Whenever a method is used this is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}
sayName("TahmKench");
// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: "Hello",
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Lando');
// Principle 3

// code example for New Binding
function Person(greeter) {
   this.greeting = 'Hello';
   this.greeter = greeter;
   this.speak = function() {
       console.log(this.greeting + this.greeter);
       console.log(this);
   }
}
 const Jubo = new Boi('Yates');
 const Tobi = new Boi('Beran');

 Jubo.speak(Tobi);
 Tobi.speak(Jubo);
// Principle 4

// code example for Explicit Binding
function Person(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    }
 }
  const Jubo = new Boi('Yates');
  const Tobi = new Boi('Beran');
 
  Jubo.speak.call(Tobi);
  Tobi.speak.apply(Jubo);