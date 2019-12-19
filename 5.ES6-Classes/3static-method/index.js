
class Circle{
    constructor(radious){
        this.radious=radious;
    }

    draw(){
        console.log('draw');
    }

    // Static Method
    static parce(str){ 
        const radious= JSON.parse(str).radious;
        return new Circle(radious);
    }
}

const circle = Circle.parce('{"radious" : "1"}')
console.log(circle);