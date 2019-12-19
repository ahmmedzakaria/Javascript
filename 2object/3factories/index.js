console.log('Hello')
// Factory Function
function createCircle(radious) {
    return {
        radious,
        draw : function(){
            console.log(`draw with radious ${radious}`);
        } 
    }
}

const circle= createCircle(1)
circle.draw();

