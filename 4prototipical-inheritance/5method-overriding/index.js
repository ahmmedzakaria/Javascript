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
    // Shape.prototype.duplicate();
    //or 
    Shape.prototype.duplicate.call(this); //call super class method
    console.log('duplicate in Circle');
}

const c =new Circle();
c.duplicate();





