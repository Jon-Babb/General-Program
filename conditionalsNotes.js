// these are notes on conditionals in programming ????

/* If -> then
look like math for comparisions
*/
/*let a = 5;
console.log(5 < 3);
console.log(5 > 3);
console.log(a ==5);
console.log(a == "5");
console.log(a === "5");
console.log(a != 3); 
console.log("Badin" > "Ross");
console.log("R" > "B");
console.log("b" == "B");
if (3 < 5){
    console.log("3 is less than 5");
}
if(7 < 5){
    console.log("7 is less than 5");
} else {
    console.log("7 is not less than 5");
} 
    *
let testNumber = 6;
if(testNumber > 6){
    console.log(`${testNumber} is greater than 6.`);
} else {
    if(testNumber < 6){
        console.log(`${testNumber} is less than 6`);
    } else {
        if(testNumber = 6){
            console.log(`${testNumber} is equal to 6`);
        }


let testNumber = 0
if (testNumber < 1){
    console.log(`${testNumber} is less than 1`);
} else if (testNumber == 1) {
    console.log(`${testNumber} is equal to 1`);
} else {
    console.log(`${testNumber} is greater than 1`);
}


let gradeNumber = 99
if (gradeNumber < 60){
    console.log(`${gradeNumber} = F`);
} else if (gradeNumber < 70 ){
    console.log(`${gradeNumber} = D`);
} else if (gradeNumber < 80){
    console.log(`${gradeNumber} = C`);
} else if (gradeNumber < 90){
    console.log(`${gradeNumber} = B`);
} else if (gradeNumber < 100){
    console.log(`${gradeNumber} = A`);
}

let temperature = 120;
let precipatation = true;
if (precipatation == true && temperature < 46){
    console.log("Jacket and pants");
} else if (precipatation == true && temperature < 60 && temperature > 45){
    console.log("Jacket and pants");
} else if (precipatation == true && temperature < 75 && temperature > 59){
    console.log("Jacket and pants");
} else if (precipatation == true && temperature > 74){
    console.log("Jacket and shorts");
} else if (temperature < 46){
    console.log("Sweartshirt and pants");
} else if (temperature < 60 && temperature > 45){
    console.log("Long sleeve shirt and pants");
} else if (temperature < 75 && temperature > 59){
    console.log("T-shirt and pants");
} else if (temperature > 74){
    console.log("T-shirt and shorts");
}

let testVariable = null || "banana" || 1 || false;
console.log(testVariable);

let testVariable2 = null || false || 0;
console.log(testVariable2)

console.log(true && true && true && true);
console.log(true && 0 && true && true);
console.log(true && "false" && 5 && 3.14);

console.log(!NaN);
console.log(!1);
console.log(!!NaN);
*/

let day = undefined
switch (new Date() .getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        console.log("Not a date");
}
console.log(day);

let age = 2;
if (age >= 14 || age <= 90){
console.log("age is right");
} else if (age < 14 || age > 90){
console.log("age is wrong");
}