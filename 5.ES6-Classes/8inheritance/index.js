class Shape{
    constructor(color){
        this.color=color;
    }
    move(){
        console.log('move');
    }
}


class Circle extends Shape{
    constructor(color, radious){
        super(color);
        this.radious=radious;
    }
    draw(){
        console.log(`drawing Circle Color: ${this.color} radious: ${this.radious}`);
    }
}


const c = new Circle("red",1);
console.log(c);
c.move();
c.draw();