var maths = require("./maths");
var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[4]);
var operator = process.argv[3];
if(operator == "+") {
    console.log(maths.sum(num1, num2));
}
else if(operator == "-") {
    console.log(maths.difference(num1, num2));
}
else if(operator == "*") {
    console.log(maths.product(num1, num2));
}
else if(operator == "/") {
    console.log(maths.quotient(num1, num2));
}
else{
    console.log("Please enter a valid operator")
}