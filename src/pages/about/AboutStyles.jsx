import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 80px);
    line-height: 2;

    span{
        color: white;
        font-family: "Girassol", sans-serif;
        font-size: 3rem;
    }
`;

export const HeaderContainer = styled.div`
    text-align: center;
`

export const InfoContainer = styled.div`
    text-align: right;
    margin: 0 10px;
    max-width: 1000px;
    border: 1px solid white;
    padding: 25px;
    border-radius: 5px;
    margin-bottom: 4rem;

    a{
        color: white;
    }
`;

export const StyledImage = styled.img`
    width: 300px;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;