// Basic Arithmetic Questions - 

// 1. Given length and breadth of a rectangle return the area of a rectangle.
let area=(a,b)=>{
    let c=a*b;
    console.log(c)
}
area(5,4)

// 2. Take a number and print the square of the number
let square=(a)=>{
    let s = a**2;
    console.log(s)
}
square(9)

// 3. Take two numbers and only print the integer part when a is divided by b
let integer=(a,b)=>{
    let d = Math.floor(a/b);
    console.log(d)
}
integer(61,2)

// 4. Take a number and print out the last digit of the number.
let lastDigit = (num)=>{
    let l = num%10;
    console.log(l)
}
lastDigit(456)

// 5. Take a number and find the cube of that number
let cube = (num)=>{
    let t = num**3;
    console.log(t)
}
cube(7)

// 6. Take a 3 digit number and print the reverse of that number Ex - 235 = 532
let reverse=(num)=>{
    let digit1 = Math.floor(num / 100);
    let digit2 = Math.floor((num % 100) / 10);
    let digit3 = num % 10;
    let reversedNumber = digit3 * 100 + digit2 * 10 + digit1;
    console.log(reversedNumber);
}
reverse(235)

// 7. Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7;
// Function to find the first digit of a number
function findFirstDigit(number) {
    number = Math.abs(number);
    while (number >= 10) {
        number = Math.floor(number / 10);
    }
    console.log(number);
}
findFirstDigit(456);

// 8. Take a number and return the sum of the first and last digit. ex - 10 = 1+0 = 1, 452 = 4+2=7
let sum = (num) =>{
    let l = num%10;
    num = Math.abs(num);
    while (num >= 10) {
        num = Math.floor(num / 10);
    }
    console.log(l+num);
}
sum(346)

// 9. Take the salary of five employees and print the average salary of all the employees.
function average(a, b, c, d, e) {
    let salary = (a + b + c + d + e) / 5;
    console.log(salary);
}
average(300,400,1000,600,500)

// 10. Take two numbers and swap them. Ex - a = 10, b=5; => a=5, b=10;
let swap = (a,b)=>{
    let temp = a;
    a = b;
    b = temp;
    console.log(a,b);
}
swap(10,20)


// Basic If-Else Questions - 

// 1. Write a program that checks if a given number is even or odd.
let checkNum=(num)=>{
    if (num%2==0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`);
    }
}
checkNum(37)

// 2. Create a function that takes two numbers as parameters and returns the larger one.
let parameter=(a,b)=>{
    if (a>b){
        console.log(`${a} is greater`);
    }
    else{
        console.log(`${b} is greater`);
    }
}
parameter(5,8)

// 3. Write a function that determines if a given year is a leap year.
let leapYear=(year)=>{
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
        console.log(`${year} is leap year`);
    }
    else{
        console.log(`${year} is not a leap year`);
    }
}
leapYear(2024)

// 4. Implement a program that checks whether a given character is a vowel or consonant.
let checkChar=(char)=>{
    char = char.toString();
    if ((char=="a")|| (char=="e")|| (char=="i")|| (char=="o")|| (char=="u")){
        console.log(`${char} is a vowel`);
    }
    else{
        console.log(`${char} is a consonent`);
    }
}
checkChar("s");

// 5. Create a function that takes three numbers as input and returns the largest among them.
let greater=(a,b,c)=>{
    if ((a>b)&&(a>c)){
        console.log(`${a} is greater`);
    }
    else if ((b>a)&&(b>c)){
        console.log(`${b} is greater`);
    }
    else{
        console.log(`${c} is greater`);
    }
}
greater(2,8,4)

// 6. Write a program that checks if a given number is positive, negative, or zero.
let checkNumber=(num)=>{
    if (num==0){
        console.log(`${num} is zero`);
    }
    else if (num>0){
        console.log(`${num} is positive`);
    }
    else{
        console.log(`${num} is negative`);
    }
}
checkNumber(-56)

// 7. Implement a function that calculates the grade of a student based on their score.
let calculateGrade=(score)=> {
    if (score < 0 || score > 100) {
        console.log("Invalid score. Score must be between 0 and 100.");
    }
    else if (score >= 90) {
        console.log("A");
    }
    else if (score >= 80){
        console.log("B");
    }
    else if (score >= 70){
        console.log("C");
    }
    else if (score >= 60){
        console.log("D");
    }
    else {
        console.log("F");
    }
}
calculateGrade(69)

// 8. Create a program that determines if a given string is a palindrome.
let checkPalindrome = (num) => {
    let str = '';
    for (let i = num.length - 1; i >= 0; i--) {
        str += num[i];
    }
    if (num === str) {
        console.log(`${num} is a palindrome`);
    } else {
        console.log(`${num} is not a palindrome`);
    }
}
checkPalindrome("343");

// 9. Write a function that checks whether a person is eligible to vote based on their age.
let checkAge=(age)=>{
    if (age>=18){
        console.log(`your age is ${age}, so you are eligible`);
    }
    else{
        console.log(`your age is ${age}, so you are not eligible`);
    }
}
checkAge(56)

// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
let triangleType=(side1, side2, side3)=> {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0 || 
        side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        console.log("Invalid triangle");
    }
    else if (side1 === side2 && side2 === side3) {
        console.log("Equilateral triangle");
    }
    else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log("Isosceles triangle");
    }
    else{
        console.log("Scalene triangle");
    }
}
triangleType(60,60,60)