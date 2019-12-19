function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
}

const circle=new Circle(11);
//console.log(circle);

// for (let key in circle){
//    // console.log(key);
//     console.log(key, circle[key]);
// }


for (let key in circle){
    if(typeof circle[key] !=='function')
     console.log(key, circle[key]);
 }

 const keys=Object.keys(circle);
 console.log('Keys='+keys);

 //Check Existance of property or method

 if('radius' in circle){
     console.log('radius property  exist in circle')
 }