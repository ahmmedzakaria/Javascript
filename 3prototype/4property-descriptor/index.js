let person = { name : 'Zakaria' };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, '');
console.log(descriptor);
/*
{ value: [Function: toString],
    writable: true,     // we can override this method
    enumerable: false,  // toString is not itrateable with loop
    configurable: true  // we can delet toString form object
}
*/