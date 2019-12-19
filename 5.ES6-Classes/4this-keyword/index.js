//'use strict'

const Circle = function(){
    this.draw=function(){
        console.log(this);
    };
}

const c = new Circle();
// Method Call
c.draw();

//Function Call
const draw = c.draw;
draw();

/**
 * 'use strict' privent accidentally modifing window or global object
 */


class Squire {
    draw(){
        console.log(this);
    };
}

const s = new Squire();
const draw2 = s.draw;
draw2();

/**
 * ES6 Classes are by default use 'use strict'
 */

