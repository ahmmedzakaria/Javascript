function Shape(){
    
}
Shape.prototype.duplicate= function(){
    console.log('duplicate in Shape');
}

// Intermidet function
function extend(Child, Parent){
    Child.prototype= Object.create(Parent.prototype);
    Child.prototype.constructor= Child;
}

function Circle(){
   
}

extend(Circle,Shape)

Circle.prototype.duplicate =function(){
    console.log('duplicate in Circle');
}

function Squire(){
   
}

extend(Squire,Shape)

Squire.prototype.duplicate =function(){
    console.log('duplicate in Squire');
}

const shapes = [
    new Circle(),
    new Squire()
];

for (let shape of shapes){
    shape.duplicate();
}



