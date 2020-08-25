const memory= require('./memory')

function main(){
    Array.SIZE_RATIO = 3;
    
    // Create an instance of the Array class
    let arr = new Array();
    return arr
}
const arr= main()

// Add an item to the array
    arr.push(3);
    console.log('New array instance:',arr);
//length:
//capacity:
//memory address:

//EXPLORING THE PUSH METHOD
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr)
//length:
//capacity:
//memory address:
//Explains:

// EXPLORING THE POP METHOD
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr)
//length:
//capacity:
//memory address:
//Explains:


//UNDERSTANDING MORE ABOUT HOW ARRAYS WORK

//Print the 1st item in the array arr.
    console.log(arr[1])

//Empty the array and add just 1 item: arr.push("tauhida");
    memory.free(arr)
    console.log(arr)

//Print this 1 item that you just added. What is the result? Can you explain your result?

//What is the purpose of the _resize() function in your Array class?



