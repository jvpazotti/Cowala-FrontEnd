import styled from "styled-components";

export const Square = styled.main`
    margin-top: 6rem;
    display: flex;
    background-color: #ededed;
    width:60rem;
    align-items: center;
    justify-content: center;
    height: 30rem;
    box-shadow: 1px 10px 12px -4px rgba(150,145,150,1);

`;

export const Info = styled.div`

    display: flex;

    background-color: #ededed;

    width: 30rem;

    flex-direction: column;

    align-items: center;

    height: 19rem;

    

    

`;

export const Row = styled.div`
    display: flex;
    width: 30rem;
    flex-direction: row;
    margin: 0.5rem;
    justify-content: space-between;

`;

export const Input = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30rem;
    font-weight: bold;

    input{
        margin-top:0.3rem ;
        border:none;
        height: 2rem;
        width: 16rem;
        
    }

    .namebox{
        width: 29.8rem;
    }

    .prof{
        width: 13rem;
    }

    .cell{
        width: 15.1rem;
    }


`;

export const Button = styled.div`

  
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(0, 0, 0, 0);
   
    
   

    button{
        border: none ;    
        background-color: #00d9d0;
        height: 2.2rem;
        margin-top: 0.3rem;
        padding-left: 1rem;
        padding-right:1rem ; 
        width: 9rem;
        text-align: center;
    }

    button:hover{
        cursor: pointer;
    }

    button:active{
        background-color: #25aaa5; 
    }





`;

export const Buttons = styled.div`

    display: flex;
    justify-content: space-evenly;
    margin:0.5rem;
    padding-left: 1rem;
    padding-right:1rem ;
    padding-top:0.4rem;
    padding-bottom: 0.4rem;
    height: 2.1rem;
    width: 20rem;
    
    
    .buttons{
        background-color: #091733;
        color: white;
        width: 6rem;
        border: none;
    }

`