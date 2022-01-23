import {Info, Row, Square, Input, Button, Buttons} from "./styles"
import { SetStateAction, useEffect, useState } from "react";

import api from "../../api/ip"

export function Box(){

    const [Name, setName] = useState("");
    const [Profession, setProfession] = useState("");
    const [Cell, setCell] = useState("");
    const [IP, setIP] = useState("");

    const nameChanged = (event: { target: { value: SetStateAction<string>; }; }) =>{
        setName(event.target.value);
    }

    const profChanged = (event: { target: { value: SetStateAction<string>; }; }) =>{
        setProfession(event.target.value);
    }

    const cellChanged = (event: { target: { value: SetStateAction<string>; }; }) =>{
        setCell(event.target.value);
    }

    const handleSubmit = async () => {

        const response = await api.get("/");
        const ip = response.data;

        setIP(ip);
    }

    const saveInfo = () => {

        localStorage.setItem("Nome",Name);
        localStorage.setItem("Profissão",Profession);
        localStorage.setItem("Celular",Cell);
        localStorage.setItem("IP",IP);

        alert("Informação salva!!");

    }

    const limparInfo = () => {

        localStorage.clear();

        setName('');
        setProfession('');
        setCell('');
        setIP('');

        alert("Informação limpa!!");

    }

    const savedInfo = () => {

        setName(String(localStorage.getItem("Nome")));
        setCell(String(localStorage.getItem("Celular")));
        setProfession(String(localStorage.getItem("Profissão")));
        setIP(String(localStorage.getItem("IP")));

    }

    useEffect(()=>{if(localStorage.length>0){
        savedInfo();}       
},[])
    

    return(
        <div>
        <Square>
            <Info>
                <Row>
                    <Input> 
                    Nome 
                    <input 
                    type="text" 
                    className="namebox"
                    value={Name}
                    onChange={nameChanged}
                    />
                    </Input>
                </Row>
                <Row>
                    <Input>
                    Profissão
                    <input 
                    type="text"
                    className="prof"
                    value={Profession}
                    onChange={profChanged}
                    />
                    </Input>
                    <Input>
                    Celular
                    <input type="text"
                    className="cell"
                    value={Cell}
                    onChange={cellChanged}
                    />
                    </Input>
                </Row>
                <Row>
                    <Input>
                        Meu IP
                        <input type="text"
                        value={IP}
                        />
                    </Input>
                    <Button>
                        Nada
                        <button onClick={handleSubmit}>ENCONTRAR IP</button>
                    </Button>
                </Row>
                <Buttons>
                <button className="buttons" onClick={saveInfo}>SALVAR</button>
                <button className="buttons" onClick={limparInfo}>LIMPAR</button>
                </Buttons>
            </Info>
        </Square>
        </div>
    )

}