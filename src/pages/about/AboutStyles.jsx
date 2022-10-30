import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 80px);
    line-height: 1.5;
    perspective: 1000px;
    
    h1{
        color: #350c4f;

    }

    .first{
        font-family: 'Dancing Script', cursive;
        color: #ffffff78;
        font-size: 3rem;
    }
    
    span{
        color: white;
        font-family: 'Dancing Script', cursive;
        font-size: 3rem;
    }
`;

export const HeaderContainer = styled.div`
    text-align: center;
`

export const InfoContainer = styled.div`
    text-align: right;
    font-size: 1.2rem;
    margin: 10px;
    max-width: 1000px;
    padding: 25px;
    border-radius: 5px;
    margin-bottom: 4rem;
    background-color: #eaddf194;
    font-weight: 300 !important;
    color: white;

    a{
        color: #350c4f;
        text-decoration: none;
    }
`;

export const StyledImage = styled.img`
    width: 250px;
    margin-top: 2rem;
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