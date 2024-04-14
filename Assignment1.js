// 1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
let a = 10;
let b = 20;
c = a+b
d = a-b
e = a*b
f = a/b
g = a%b
console.log(c,d,e,f,g);

// 2.  Take two numbers and only print the integer part when a is divided by b.
let h = 10;
let i = 20;
let j = (a/b)
console.log(parseInt(j));

// 3. Take two numbers a,b and print the exponential power of the first number raised by the second.
let k = 2;
let l = 3;
m = k**l
console.log(m);

// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.
let n = 10;
let o = 20;
let p = (a/b)
console.log(parseFloat(p));

// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.
let q = 10;
let r = 20;
let s = 30
let t = 25;
let u = 35;
v = (q+r+s+t+u)/5
console.log(v);

// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.
let sp = 20;
let cp = 10;
profit = sp-cp
console.log(profit);

// 7. Take a number and print out the last digit of the number.
let w = 23;
x = w%10
console.log(x);

// 8.Take a 2 digit number and return the first and last digits.
let y = 45;
console.log(parseInt(y/10));
console.log(y%10);

// 9. Write a JavaScript program to find the largest of three numbers.
let num1 = 10;
let num2 = 25;
let num3 = 15;

if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is:", num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is:", num2);
} else {
    console.log("The largest number is:", num3);
}

// 10. Write a JavaScript program to check whether a number is even or odd.
let num = 13;
if (num%2==0){
    console.log("even");
}
else{
    console.log("odd");
}

// 11. Write a JavaScript program to check whether a given number is prime or not.
let number = 17; 
let count = 1; 

if (number <= 1) {
    count = 0; 
} else {
    for (let i = 2; i < number && count === 1; i++) {
        if (number % i === 0) {
            count = 0; 
        }
    }
}
if (count === 1) {
    console.log("prime number");
} else {
    console.log("not a prime number");
}

// 12. Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.
let celsius = 25;
let fahrenheit= 77;
let celsiusToFahrenheit = (celsius * 9/5) + 32;
let fahrenheitToCelsius = (fahrenheit - 32) * 5/9;
console.log(celsius + " degrees Celsius is equal to " + celsiusToFahrenheit);
console.log(fahrenheit + " degrees Fahrenheit is equal to " + fahrenheitToCelsius);


