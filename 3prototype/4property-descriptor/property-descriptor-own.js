let person = { name : 'Zakaria' };

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

person.name = 'Rubel'; //property remain unchanged
console.log("After assigning name to person: "+person.name);

console.log(Object.keys(person)); // keys will not display

delete person.name; //can't delete name property of person
console.log("After deleting name property from person: "+person.name);



