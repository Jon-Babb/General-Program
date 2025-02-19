// /* loop notes

// loops are great to repeat steps
// multiple things in a row or until something happens, loops are the way to go
// 2 type of loops
// -while loops
// -for loops
// WHILE:
// while (condition) {
//     code goes here
// }
//     code will repeat as long as the condition is true
//     ex.
//     */
// // let i = 0
// // while (i<3){
// //     console.log(i);
// //     i++;  //short hand for i = i + 1
// // }

// /* a single loop is called an iteration
// while loops will conutine untik their condition becomes falsy
// 0 is falsy
// // */
// // while (i){
// //     console.log('banana');
// //     i--;
// // }

// /* a do... while loop will also excute at least once
// do {
//     code goes here
// } while (condition);
//  */

// // let a = 0
// // do {
// //     console.log(a);
// //     a += 1;
// // } while (a < -1);

// /* FOR LOOPS
// they are like while loops, thier synthx are more complicated but they are more commonly used
// for (being; condition; step) {
//     code goes here
// }
// */
// // for (let j = 0; j < 5; j++) {
// //     console.log(j);
// // }
// /* with either type of loop
// if your condition is based on a number than use <, >, <= or >=
// == and != are likely going to miss your condition and make an infinte loop

// you might be off by 1 so you have to change between < and <= or > and >=
// you can skip elements of the for loop declaration

// let i = 0;
// for(; i < 3; i++) {
//     console.log(i)
// }


// for(let i = 0; i < 3;) {
//     console.log(i++)
// }

// let i = 0
// for(; i < 3;){
//     console.log(i);
//     i++;    
// }

// for(;;){
//     this is infinite loop
// }

// Break as a command
// break will exit you from a loop and move on to the next part of code
// put breaks in as fail safe
// */

// // let sum = 0
// // while (true){
// //     let value = +prompt("Enter a number", '')
// //     if(!value){
// //         break;
// //     }
// //     sum += value;
// // }
// // console.log('sum = ' + sum)


// // let sum = 0;
// // let max = +prompt("Add the numbers from 1 to what?");
// // let now = Date.now();

// // for(let i = 1; i <= max; i++){
// //     sum += i;

// //     if(Date.now() > now + 1000){
// //         console.log("This took to long");
// //         break;
// //     }
// // }
// // console.log(sum);
// // console.log(now);


// /* CONTINUE as a command
// continue is like a break
// instead of ejecting you it just skips to the end of the currect iteration
// */
// // for(let i = 0; i < 21; i++){
// //     if(i % 2 == 0 ){
// //         continue;
// //     }
// //     console.log(i);
// // }

// // For, While, Do... While
// //DO while loop will excute at least once

















// /* Arrays
// array is a collection of values, ordered collection of values

// let arrayName = [item1, itme2, item3];

// empty arrays
// let fakeArray1 = new Array();

// let fakeArray = [];
// */
// let fruits = ["Apples", "Banana", "Canteloupes", "Durians",];

// console.log(fruits);
// console.log(fruits[3]);
// fruits[3] = "Watermelons"
// console.log(fruits);

// fruits[4] = "Strawberries"
// console.log(fruits)

// console.log(fruits.length);
// fruits[fruits.length] = "Dragonfruits"
// console.log(fruits);

// let exampleArray2 = ["Apple", 35, true, function() {console.log('hello');}, "array"];
// console.log(exampleArray2[0]);
// console.log(exampleArray2[1]);
// console.log(exampleArray2[3]);


// let obj1 = [3,5];
// let obj2 = [7,11];
// let dist = Math.sqrt((obj2[0] - obj1[0])**2 + (obj2[1] - obj1[1])**2)
// console.log(dist);

// let primes = [2, 3, 5, 7, 11, 13, 17, 19];
// let i = 0;
// while(i < primes.length){
//     // console.log(primes[i]);
//     i++;
// }

// console.log(primes.at(-1));

// // array methods 
// // .pop() finds the last element of the array, returns it and than deletes it from the array

// console.log(primes);
// console.log(primes.pop());
// console.log(primes);

// here is a thing that finds the sum of all primes less than 20
// let sum = 0
// while (primes.length > 0){
//     sum += primes.pop();
//     console.log(primes, sum)
// }
// console.log(sum);

// inverse of .pop() is .push()
//.push() adds an element to the end of the array

let fruits = ["apples", "banana", "grapes"];
console.log(fruits);
fruits.push("watermelon");
console.log(fruits);

// problem with pop and push is that you can only modify the end of the array
// you need different methods for changing the start of an array
// .shift() is pop but at the start

console.log(fruits.shift());
console.log(fruits);

// unshift() is push but at the start

fruits.unshift("Apricot");
console.log(fruits);

fruits.push("Orange", "Peach");
fruits.unshift("Lemon", "Pinapple");
console.log(fruits)

// using loops with arrays
// old style

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

for (let fruit of fruits){
    console.log(fruit);
}