class _Node {
    constructor(data,next) {
        this.data= data;
        this.next= next;
    }
}

//CREATE A STACK CLASS (w. push and pop methods)
class Stack {
    constructor(){
        this.top= null;
    }
    push(data){
        if(this.top===null){
            this.top= new _Node(data,null)
            return this.top;
        }
        const node= new _Node(data,this.top)
        this.top= node
    }
    pop(){
        const node=this.top
        this.top= node.next;
        return node.data;
    }
}
const starTrek= new Stack()

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

//console.log(starTrek)

function peek(stack){

}
function isEmpty(stack){

}
function display(node){
    if (!node) {
        console.log('Stack is empty')
        return;
    }
    console.log(node.data)
    if (node.next===null) return;
    return display(node.next)
}
display(starTrek.top)
