import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    height: fit-content;
    background: #6e108b;

`;

export const RecipeCard = styled.div`
    background-color: #eaddf1;
    padding: 5px;
    border-radius: 3px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    box-shadow: 8px 8px 5px black;

    &:hover {
        box-shadow: none;
        transition: all 0.5s ease-in;
    }
`;

export const RecipeImage = styled.img`
    height: 150px;
    border-radius: 10px;
`;

export const Button = styled.button`
    background-color: #3f0762;
    color: white;
    padding: 8px;
    outline: none;
    border: none;
    margin: 10px;
    border-radius: 3px;
    cursor: pointer;
`;

export const RecipeHeader = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color: #3f0762;

`;

export const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 20rem;
    background: #6e108b;
    transform: rotateY(360deg);
    animation: rotateAnimation 8s linear infinite;

    @keyframes rotateAnimation {
        from {
            transform: rotateY(360deg);
        }
        to {
            transform: rotateY(0deg);        }
    }

`;

export const HomeImg = styled.img`
    width: 80%;
    max-width: 750px;
    
`