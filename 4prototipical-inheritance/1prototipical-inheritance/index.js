function Shape(){

}
Shape.prototype.duplicate= function(){
    console.log('duplicate');
}

function Circle(radious){
    this.radious=radious;
}

Circle.prototype= Object.create(Shape.prototype);
Circle.prototype.constructor= Circle;

Circle.prototype.draw =function(){
    console.log('draw');
}

const s =new Shape();
const c =new Circle(1);

console.log(c);
console.log(s);