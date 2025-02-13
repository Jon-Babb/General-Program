/* loop notes

loops are great to repeat steps
multiple things in a row or until something happens, loops are the way to go
2 type of loops
-while loops
-for loops
WHILE:
while (condition) {
    code goes here
}
    code will repeat as long as the condition is true
    ex.
    */
// let i = 0
// while (i<3){
//     console.log(i);
//     i++;  //short hand for i = i + 1
// }

/* a single loop is called an iteration
while loops will conutine untik their condition becomes falsy
0 is falsy
// */
// while (i){
//     console.log('banana');
//     i--;
// }

/* a do... while loop will also excute at least once
do {
    code goes here
} while (condition);
 */

// let a = 0
// do {
//     console.log(a);
//     a += 1;
// } while (a < -1);

/* FOR LOOPS
they are like while loops, thier synthx are more complicated but they are more commonly used
for (being; condition; step) {
    code goes here
}
*/
// for (let j = 0; j < 5; j++) {
//     console.log(j);
// }
/* with either type of loop
if your condition is based on a number than use <, >, <= or >=
== and != are likely going to miss your condition and make an infinte loop

you might be off by 1 so you have to change between < and <= or > and >=
you can skip elements of the for loop declaration

let i = 0;
for(; i < 3; i++) {
    console.log(i)
}


for(let i = 0; i < 3;) {
    console.log(i++)
}

let i = 0
for(; i < 3;){
    console.log(i);
    i++;    
}

for(;;){
    this is infinite loop
}

Break as a command
break will exit you from a loop and move on to the next part of code
put breaks in as fail safe
*/

// let sum = 0
// while (true){
//     let value = +prompt("Enter a number", '')
//     if(!value){
//         break;
//     }
//     sum += value;
// }
// console.log('sum = ' + sum)


// let sum = 0;
// let max = +prompt("Add the numbers from 1 to what?");
// let now = Date.now();

// for(let i = 1; i <= max; i++){
//     sum += i;

//     if(Date.now() > now + 1000){
//         console.log("This took to long");
//         break;
//     }
// }
// console.log(sum);
// console.log(now);


/* CONTINUE as a command
continue is like a break
instead of ejecting you it just skips to the end of the currect iteration
*/
for(let i = 0; i < 21; i++){
    if(i % 2 == 0 ){
        continue;
    }
    console.log(i);
}