var arrayList = ['a','b','c','d','e','f'];
let arr="";
var n=arrayList.length;
for(let i=0;i<n;i++){
    arr=arrayList.splice(arrayList.length-1,1);
    console.log(arr.toString());
}

console.log("Finally, the array is : ",arrayList);