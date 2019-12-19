
const _radious = new WeakMap(); 

class Circle {
    constructor(radious){
        //Private Member
       _radious.set(this, radious);

    }

    get radious(){
        return _radious.get(this);
    }

    set radious(value){
        if(value <=0) throw new Error('Invalid radious')
        _radious.set(this, value)
    }
    
   
}

const c = new Circle(1);
c.radious=5;
console.log(c.radious);
