
const _radious = new WeakMap(); 
const _move = new WeakMap();

class Circle {
    constructor(radious){
        //Private Member
       _radious.set(this, radious);

       // Private Method
       _move.set(this, () => {
           console.log('move', this)
       })

        //    // Private Method
        //    _move.set(this, function() {
        //     console.log('move', this)
        //     })

    }

    draw(){
        _move.get(this)();
        console.log('draw');
    }
    
   
}

const c = new Circle(1);
console.log(c);
c.draw();
