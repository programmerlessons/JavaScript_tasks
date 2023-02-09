var String1="Mary";
var String2="Army";
let arr_str1,arr_str2;

console.log(String1);
console.log(String2);
if(String1.length!=String2.length){
    console.log("They are not Anagrams");
}
else{
    arr_str1=(String1.toLowerCase()).split('').sort().join('');
    arr_str2=(String2.toLowerCase()).split('').sort().join('');
    if(arr_str1==arr_str2){
        console.log("They are Anagrams");
    }
    else{
        console.log("They are not Anagrams");
    }
}

