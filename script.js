var num1, num2;
num1=prompt("Enter the first number :");
num2=prompt("Enter the Second number :");

num1= parseInt(num1);
num2= parseInt(num2);

document.write("First Number is :"+num1+"<br/>");
document.write("Second Number is :"+num2+"<br/>");
// For Addition
document.write("<br/>");
document.write(num1);
document.write("+");
document.write(num2);
document.write("=");
document.write(num1+num2);
document.write("  (Addition)");
//for Substraction
document.write("<br/>");

document.write(num1);
document.write("-");
document.write(num2);
document.write("=");
document.write(num1-num2);
document.write("  (Substraction)");
//for Multiplication
document.write("<br/>");

document.write(num1);
document.write("×");
document.write(num2);
document.write("=");
document.write(num1*num2);
document.write("  (Multiplication)");
//for Division
document.write("<br/>");

document.write(num1);
document.write("÷");
document.write(num2);
document.write("=");
document.write(num1/num2);
document.write("  (Division)");

//for Remainder
document.write("<br/>");

document.write(num1);
document.write("%");
document.write(num2);
document.write("=");
document.write(num1%num2);
document.write("  (Remainder)");