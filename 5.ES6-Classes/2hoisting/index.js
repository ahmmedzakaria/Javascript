
sayHello();
sayGoodbye(); // it Show error
// Function Declaration
function sayHello(){
    console.log('hello');
}

// Function Expression
const sayGoodbye = function (){
    console.log('goodbye');
};

/**
 * Function Declaration are Hoisted. We call it berore declaration
 * Function Expression are not Hoisted. We can't call it berore declaration
 * 
 */


 const c = new Circle()
 // Class Declaration
 class Circle{

 }

 // Class Expression
 const Squire = class {
     
 };

/**
 * Class Declaration & Expression boath are not Hoisted.
 * We have to create object after declaration.
 */