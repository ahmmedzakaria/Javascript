
class Circle{
    constructor(radious){
        this.radious=radious;
        this.move = function(){
            console.log('move');
        };
    }

    draw(){
        console.log('draw');
    }
}

const c = new Circle(1);
console.log(c);

console.log("Type of Circle is: "+typeof(Circle))