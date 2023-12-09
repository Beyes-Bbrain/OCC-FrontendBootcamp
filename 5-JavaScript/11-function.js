//Functions - Set of Instructions

function greet(){
    console.log("Instruction #1")
    console.log("Instruction #2")
    console.log("Instruction #3")
    console.log("Merry Christmas!")
};

greet();

//Function Hoisting
//1.Function Declaration
function functionDeclaration(){
    console.log("Hello World! I am a function declaration");
}
functionDeclaration();

//2.Function Expression
const functionExpression = function(){
    console.log("Hello universe!I am a function expression");
}
functionExpression();

//Function with parameters

function greet(name){//varible -parameter/argument -value
    console.log("Hello",name);
}

greet('Daisy');

//Functions with a return value
function sum(a,b){
   return a + b;
   console.log("Hello KC");
};
console.log("Sum:",sum(10,5));

//Anonymous Function
let greet2 = function (){
    console.log("Hey hey hey");
};

greet2();

//Higher-order function
function calculate(operation,num1,num2){
return operation (num1,num2);
}

//Callback function
function add(a,b){
 return a+b;
};

function substract(a,b){
return a-b;
};

//Using higher-order function
let total = calculate(add,10,5);
let difference = calculate (substract,23,13);

console.log("Result of addition:",total);
console.log("Result of substraction",difference);



