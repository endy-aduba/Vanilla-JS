//Create a variable x that is a random number between 1 and 100 along with a variable called y that is a random number between 1 and 50.

//Create a variable for the sum, difference, product, quotient and remainder of x and y. Log the output in a string that shows the two numbers of x and y along with the operator and result. you can use string literals or concatenation to log your output.
let x;

x = Math.floor(Math.random() * 100);
y = Math.floor(Math.random() * 50);

sum = x + y;
difference = x - y;
product = x * y; 
remainder = x % y;
Quotient = Math.floor(x/y)

console.log(`X is ${x} and Y is ${y}\n\nSum = ${sum} \nDifference = ${difference}\nProduct = ${product}\nRemainder = ${remainder}\nQuotient = ${Quotient}`);