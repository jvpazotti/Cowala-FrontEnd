function validade(data,str){

    let today= new Date();

    let expireDate = new Date(data);

    let expireDay = parseInt(str.split("d")[0]);

    expireDate.setDate(expireDate.getDate()+expireDay);

    if (expireDate>today){
        return true
    }

    return false
       


}

console.log(validade("2021-12-10T00:00:00.000Z", "180d"));