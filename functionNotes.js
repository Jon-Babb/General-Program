/* 
funcition is a set of instructions that are packaged together. 
Useful for reusing instructions, even if you're reusing them a lot or various "staring" conditions.

function name, parameters, arguments

function functionName(parameters1, paraemeters2){
    code
}

functionName(argument1, arguement2);

make a function that returns a message about a favorite animal
*

function favoriteAnimal(animal){
    return animal + " is my favorite animal";
}

console.log(favoriteAnimal("Panda"));

/* what happens inside a functionis frequently invisible to the outside world 
this is referred to in programming as "scope"
Local Scope : within a function
Gloabl Scope : the main program
*
let test1 = 1
let test2 = 5
function add1(num){
    test2 = test2 + 1
    return num + 1;
}
console.log(add1(test1));
console.log(test1);
console.log(test2);

/* a function can change the value of a global variable but only if that varibale is used by name within the function
variables that are passed as agruments to the function will remain unchanged


function greetings(name = "Jon"){
    console.log(`Hello ${name}`);
}
greetings("Jon");
greetings("Babb");
greetings();

/* anonymous function. anonymous functions are used if a function expects to take another function as a parameter
the function doesn't have a function name 
*/

/*(function (){
    alert("this is an anonymous function")
});
*
//example that will work
function logKey(event){
    console.log(`You pressed the "${event.key}"`)
}

this.addEventListener("keydown", logKey);
*
this.addEventListener(`keydown`, function(event){
    console.log(`You pressed ${event.key}`);
});
*
//arrow function syntax

this.addEventListener("keydown", (event) => {
    console.log(`you pressed ${event.key}`);
});
*/
//exmpale for scope

// let x = 1;
// function a() {
//     let y = 2;
//     output(y);
// }
// function b() {
//     let z = 3;
//     output(z);
// }
// function output(value) {
//     console.log(`Value = ${value}`);
// }

// output(x);
// a();
// b();

//functions can have return values. this is something that the function send beack to the gloabl scope
//some functions don't have a return value

function randomLessThan(num) {
    let x = Math.floor(Math.random() * num);
    return x;
}
console.log(randomLessThan(4));

