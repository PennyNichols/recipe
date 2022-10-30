import styled from 'styled-components'

export const DetailContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    background: #00adb5;
    min-height: calc(100vh-75px);
    padding: 5px;
`;
export const DetailPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 1rem;
    border: 1px solid white;
    border-radius: 5px;
    background-color: #e1f1dd;
    position: relative;

    
`;

export const ImgContainer = styled.div`
    border: 1px solid #00adb5;
    padding: 10px;
    border-radius: 3px;
    margin: 2rem;
    display: flex;
    margin: auto;
    img{
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
    }
`;
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 25px;
    font-size: 3rem;

    img{
        width: 200px;
    }
`;

export const HeaderLabel = styled.div`
    font-size: 2rem;
    font-weight: bolder;
`;

export const HeaderDetails = styled.div`
    font-size: 1rem;
    text-transform: uppercase;
`;


export const OtherPart = styled.div`
    width: 200px;
    font-size: .7rem;
    margin: 2rem;
    text-transform: capitalize;
    text-align: center;
`;

export const OtherPartInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    padding-top: 4rem;
`;
export const Ingredients = styled.div`
    width: 500px;
    font-size: .7rem;
    margin: 2rem;
    text-transform: capitalize;
    text-align: center;
`;

export const IngredientsInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
`;

