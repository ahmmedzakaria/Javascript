function Circle(radius){
    this.radius=radius;
    //Private Property
    let defaultLocation = {x: 0, y: 0};
     //Private Method
    let computeOptimumLocation = function(factor){

    }
    this.draw=function(){
        computeOptimumLocation(0.1);
        console.log('draw');
    }
}

const circle=new Circle(11);
circle.draw();