var num_array=[1,2,3,4,5,6];
function enqueue(in_array,value){
    in_array.push(value);
    return in_array;
}

function dequeue(in_array,value){
    in_array.pop();
    return in_array;
}

console.log(num_array);
console.log("Enqueueing 7 ->",enqueue(num_array,7));
console.log("Dequeueing ->",dequeue(num_array));