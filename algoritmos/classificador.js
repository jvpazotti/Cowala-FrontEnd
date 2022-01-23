function classificador(list){

    let array=[];

    let resp=[];

    let notresp=[];

    for(i=0;i<list.length;i++){

        if (list[i].souEu===true){

            array[0]=list[i].nome;

        }

        else if (list[i].responsavel===true && list[i].souEu===false){

            resp.push(list[i].nome);

        }

        else{

            notresp.push(list[i].nome);

        }
 
    }

    resp.sort((a,b)=> a.localeCompare(b,"pt",{ignorePunctuation: true}));

    notresp.sort((a,b)=> a.localeCompare(b,"pt",{ignorePunctuation: true}));

    array.push(resp);

    array.push(notresp);

    return array;
    
}

console.log(classificador([{souEu:false,responsavel:false,nome:"Jonas"}
,{souEu:true,responsavel:true,nome:"Eduardo"}
,{souEu:false,responsavel:true,nome:"Cid"}
,{souEu:false,responsavel:true,nome:"Carlos"}
,{souEu:false,responsavel:true,nome:"Cecilia"}
,{souEu:false,responsavel:false,nome:"Jailson"}
]));