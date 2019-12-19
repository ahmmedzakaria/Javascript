/**
 * Symbol gives unique value
 * It is not a constructor function
 * We can't use new keyword before Symbol()
 */
const _radious = Symbol(); 
const _draw = Symbol();

class Circle {
    constructor(radious){
        //Private Member
        this[_radious]=radious;
    }
    // Private Method
    [_draw](){
        console.log('draw');
    }
}

const c = new Circle(1);
console.log(c);
c.draw();
