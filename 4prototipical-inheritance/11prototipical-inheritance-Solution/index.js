function HtmlElement(){
    this.click =function(){
        console.log('clicked');
    }
}

HtmlElement.prototype.focus= function(){
    console.log();
}

function HtmlSelectElement(items = []){
    this.items=items;
    this.addItem =function(item){
        this.items.push(item)
    }

    this.removeItem =function(item){
        this.items.splice(this.items.indexOf(item),1)
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const htmlElement= new HtmlElement();
const htmlSelectElement =new  HtmlSelectElement();

console.log(htmlElement);
console.log(htmlSelectElement);

htmlSelectElement.addItem("Arif");
htmlSelectElement.addItem("Zakaria");
htmlSelectElement.addItem("Imam");
console.log(htmlSelectElement);

htmlSelectElement.removeItem("Zakaria");
console.log(htmlSelectElement);

