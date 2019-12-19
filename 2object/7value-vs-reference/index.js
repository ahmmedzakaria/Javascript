//In javascript 2 catagories of type

/*
    Value Types(primitive)           Reference Type
    String                              Object
    Boolean                             Function
    Symbol                              Array
    undefine              
    null                  

*/
let number=10;//premitive

function increase(number){
    number++;//here number scope only inside the function
}

increase(number);
console.log('Premitive Value: '+number);

//------------------------------------------------------------
let obj={value:10};//premitive

function increase(obj){
    obj.value++;//here number scope only inside the function
}

increase(obj);
console.log('Object Value: '+obj.value);

