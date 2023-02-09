var in_name = "Herbert George Wells"
let word;
console.log(in_name.split(' '))

function name_checker(p_name){
    fun_name = in_name.split(' ');

    //single names not allowed
    if(fun_name.length==1){
        return "not valid";
    }

    //dot after initials only allowed
    for(let iter=0;iter<fun_name.length;iter++){
        word=fun_name[iter];
        if(word.length == 1)
            return "not Valid";
    //starting letter check
        if(!(word[0] == word[0].toUpperCase()))
            return "not Valid";

    //dot at last
        if(word.length > 2){
            if(word.charAt(word.length-1) == ".")
                return"not Valid";
        }
    }

    //3 words long check
    if(fun_name.length == 3){
        if(fun_name[0].length==2){
            if(fun_name[1].length>2 )
                return "not Valid";
        }
    }

    //last name not word
    if( (fun_name[fun_name.length-1]).length <= 2 )
        return "not Valid";


    
    return "Valid";    
}





console.log(in_name,"is",name_checker(in_name));