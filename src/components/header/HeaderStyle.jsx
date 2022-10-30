import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #6e108b;
`;

export const MainHeader = styled.h2`
    margin-top: 1rem;
    font-size: 5rem;
    font-weight: 300;
    font-family: 'Dancing Script', cursive;
    color: white;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border: 2px solid white;
    border-radius: 3px;
    margin: 20px;
`;

export const FoodInput = styled.input`
    width: 15rem;
    border: none;
    border-radius: 3px;
    outline: none;
    text-indent: 10px;
    margin: 5px;
    font-size: 2rem;
    background-color: #ffffffc6;
`;

export const Button = styled.button`
    background-color: #ffffffc6;
    color: #3f0762;
    
    padding: 5px;
    outline: none;
    border: none;
    margin: 5px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 2rem;
    
    &:hover{
        background-color: #3f0762;
        transition: all .5s;
        color: #ffffffc6;
    }
    `;

export const Select = styled.select`
    border-radius: 3px;
    margin: 5px;
    border: none;
    font-size: 2rem;
    color: #3f0762;
    background-color: #ffffffc6;

    &:focus{
        border: none;
        outline: none;
    }
    
    option{
        color: #3f0762; 
        background-color: #ffffffc6 !important;

    }
`;