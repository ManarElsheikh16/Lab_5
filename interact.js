//task1
window.alert("Welcome to my site");
var Name=prompt("Enter your name","Type your name here");
document.write("welcome" +" "+ Name);

//task2
function sum(x,y){
    return eval(x+y);
}
var num1=prompt("Enter number one","Type your number one here");
var num2=prompt("Enter number two","Type your number two here");
document.write("<br/>"+"the result is" +" "+ sum(parseFloat(num1),parseFloat(num2)));

//task3
function expression(){
    var exp=prompt("Enter the math expression","Type your math expression");  
    var res=eval(exp);
    window.alert("You entered:"+" "+ exp +" "+ "and the result is:" +" "+res);
}







