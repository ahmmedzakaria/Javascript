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

    this.render = function(){
        return `
            <select>
            ${this.items.map(item => `
                <option>${item}</option>
            `).join('')}
            </select>
        `
    }
}

function HtmlImageElement(src){
    this.src =src;
    this.render =function(){
        return `<img src="${this.src}" />`
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const htmlSelectElement =new  HtmlSelectElement();

htmlSelectElement.addItem("Arif");
htmlSelectElement.addItem("Zakaria");
htmlSelectElement.addItem("Imam");

const htmlSelectObj= htmlSelectElement.render();
console.log(htmlSelectObj);

const htmlImageElement =new  HtmlImageElement('http://image.jpg');
const htmlImageObj=htmlImageElement.render();

console.log(htmlImageObj);
