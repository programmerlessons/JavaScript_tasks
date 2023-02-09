var num=100;
for(let iter=1;iter<=num;iter++){
    if((iter%3==0)&&(iter%5==0)){
        console.log(iter,"fizzbuzz");
    }

    else if(iter%3==0){
        console.log(iter,"fizz");
    }
    else if(iter%5==0){
        console.log(iter,"buzz");
    }
}   