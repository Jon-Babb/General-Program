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
let i = 0
while (i<3){
    console.log(i);
    i++;  //short hand for i = i + 1
}

/* a single loop is called an iteration
while loops will conutine untik their condition becomes falsy
0 is falsy
*/
while (i){
    console.log('banana');
    i--;
}

/* a do... while loop will also excute at least once
do {
    code goes here
} while (condition);
 */

let a = 0
do {
    console.log(a);
    a += 1;
} while (a < -1);

/* FOR LOOPS
they are like while loops, thier synthx are more complicated but they are more commonly used
for (being; condition; step) {
    code goes here
}
*/
for (let j = 0; j < 5; j++) {
    console.log(j);
}