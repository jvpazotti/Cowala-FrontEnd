function moldura(n1,n2){

    let line="";

    for(let e=1;e<=n2;e++){

        if((e===1) || (e===n2)){
            
            for(let i=1;i<=n1;i++){

                if((i===1) || (i===n1)){
                    line+="+";
                }
                else{
                line+="-";
                }

            }

        }

        

        else{

            for (let k=1;k<=n1;k++){
                if((k===1) || (k===n1)){
                    line+="-";
                }
                else{
                line+=" ";
                }
            }

        }

        line+="\n";


    }

   

    return line

}

console.log(moldura(9,6));


