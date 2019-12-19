console.log('Hello')
// Constructor Function
function Circle(radious) {

        this.radious=radious;
        this.draw = function(){
            console.log(`draw with radious ${radious}`);
        } 

}

const circle= new Circle(2)
circle.draw();

