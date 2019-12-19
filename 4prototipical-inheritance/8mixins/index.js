function mixin(target, ...sources){
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eateing');
    }
};

const canWalk = {
    walk: function(){
        console.log('walking');
    }
};

const canSwim = {
    walk: function(){
        console.log('swiming');
    }
};

const person = Object.assign({}, canEat, canWalk);
console.log(person);

//or

function Person(){

}

//Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);

const p = new Person();
console.log(p);

function Goldfish(){

}

//Object.assign(Goldfish.prototype, canEat, canSwim);
mixin(Goldfish.prototype, canEat, canSwim);

const g = new Goldfish();
console.log(g);
