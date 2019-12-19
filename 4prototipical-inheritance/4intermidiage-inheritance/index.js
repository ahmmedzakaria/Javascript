function Shape(color){
    this.color=color;
}
Shape.prototype.duplicate= function(){
    console.log('duplicate');
}

// Intermidet function
function extend(Child, Parent){
    Child.prototype= Object.create(Parent.prototype);
    Child.prototype.constructor= Child;
}

function Circle(radious,color){
    //Calling super constructor
    Shape.call(this,color);
    this.radious=radious;
}

extend(Circle,Shape)

Circle.prototype.draw =function(){
    console.log('draw');
}

const s =new Shape('green');
const c =new Circle(1,'red');

console.log(c);
console.log(s);