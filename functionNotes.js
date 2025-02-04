/* 
funcition is a set of instructions that are packaged together. 
Useful for reusing instructions, even if you're reusing them a lot or various "staring" conditions.

function name, parameters, arguments

function functionName(parameters1, paraemeters2){
    code
}

functionName(argument1, arguement2);

make a function that returns a message about a favorite animal
*/

function favoriteAnimal(animal){
    return animal + " is my favorite animal";
}

console.log(favoriteAnimal("Panda"));

/* what happens inside a functionis frequently invisible to the outside world 
this is referred to in programming as "scope"
Local Scope : within a function
Gloabl Scope : the main program
*/
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
*/

function greetings(name = "Jon"){
    console.log(`Hello ${name}`);
}
greetings("Jon");
greetings("Babb");
greetings();

