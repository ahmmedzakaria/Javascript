// Implimentation Details
const _radious = new WeakMap(); 

// Public Interface
export class Circle {
        constructor(radious){
        _radious.set(this, radious);
        }

        draw(){
            console.log('Drawing Circle with Radious: '+_radious.get(this));
        }   
   }
