function Circle(radious){
    //Instance member
    this.radious = radious;

    //Instance Method
    this.move = function(){
        this.draw();
        console.log('move');
    }
}

//Prototype members

Circle.prototype.draw = function(){
    console.log('draw');
    console.log(this.toString());
}

const c1 = new Circle(1);


// Override toString() Method

Circle.prototype.toString = function(){
    return 'Circle with radious '+ this.radious;
}

const c2 = new Circle(2);
c1.move();

// Object.keys() only return instance members
console.log(`Object.keys() only return`)
console.log(Object.keys(c1));

//Returns all members (Instance and Prototype)
console.log(' For In Loop Returns all members')
for(let key in c1) console.log(key);