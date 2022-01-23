function faxina(obj){

    for (i in obj){

        if(obj[i]===null){

            let deleter = delete obj[i];

        }

    }

    return obj

}

console.log(faxina({"fizz": "buzz", "foo": null, "bar": 42, "hi": null}));