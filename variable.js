// CHAPTER1: Variable Declaration and Redeclaration in JavaScript

// VAR: can be redeclared and reassigned
var number = 20;
console.log(number);
var number = "hi , i am now rdeclared as a string";
console.log(number);     //successful redeclaration

// LET: cannot be redeclared but can be reassigned
let para = 23;
console.log(para);
para = "78";
console.log(para)
para = true; // reassigned
console.log(para);
// let para = "trying to redeclare"; // SyntaxError: Identifier 'para' has already been declared
// console.log(para)

// CONST: cannot be redeclared or reassigned
const digit = 44;
console.log(digit) 
// digit = 100;  //TypeError: Assignment to constant variable.
// console.log(digit)