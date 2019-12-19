function Circle(radius){
    this.radius=radius
    this.draw=function(){
        console.log('draw');
    }
}

const circle=new Circle(10)


//Add property

// Dot notation
circle.location={x:1};
// Braket notation
circle['color']={x:1};
console.log(circle);

//Delete property
delete circle.location
console.log(circle);


delete circle['color']
console.log(circle)
