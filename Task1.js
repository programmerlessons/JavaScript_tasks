let in_string = "Welcome to JavaScript Guide!";
array_string = in_string.split(" ");
let final_string="";

for(let ind=0;ind<array_string.length;ind++){
    word=array_string[ind];
    let temp_string = "";
    for(let i=word.length-1;i>=0;i--){
        temp_string=temp_string.concat(word[i]);
    }
    final_string=final_string.concat(" ",temp_string);
}
console.log(final_string);