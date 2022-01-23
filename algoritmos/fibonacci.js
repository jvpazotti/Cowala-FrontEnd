function fibonacci(n){

    let array=[0,1];

    if (n>2){

       for (i=2;i<n;i++){
           array[i]=array[i-2]+array[i-1];
       }

       return array;
        

    }

    else if (n==2){

        return array;

    }

    else if (n==1){
        
        array.pop();

        return array ;
    }

    else{

        return []
    }

}

console.log(fibonacci(11))

