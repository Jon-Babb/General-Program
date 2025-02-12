// function Multiply(num1, num2) {
//     let x = num1 * num2;
//     console.log(x)
// }
// Multiply(5,5)

// function checkAge(age) { 
//     if (age > 18) { 
//          return true; 
//      } else { 
//          return confirm('Did parents allow you?');
// }
// }
// checkAge(70)
// function checkAge(age) { 
//     if (age > 18) { 
//        return true;
// } 
// return confirm('Did parents allow you?');
// }
// checkAge(7)
// It works the same with or without the "else"

function checkAge(age) {
    let answer = age > 18 ? ('Did parents allow you?') : confirm("Did parents allow you");
}
    checkAge(8)

// function min(a,b) {
//     if (a>b){
//         console.log(b);
//     } else {
//         console.log(a);
//     }
// }
// min(8,9)

function powers(x,n) {
    let y = x ** n
    console.log(y)
}
powers(6,2)