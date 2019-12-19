class Shape{
    constructor(color){
        this.color=color;
    }
    move(){
        console.log('move from Shape');
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

    move(){
        super.move();
        console.log('move from Circel');
    }
}


const c = new Circle("red",1);
console.log(c);
c.move();
c.draw();