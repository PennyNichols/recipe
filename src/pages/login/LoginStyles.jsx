import styled from 'styled-components'

export const LoginContainer = styled.div`
    background-image: url('https://picsum.photos/1600/900');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    align-content: center;
`;

export const FormContainer = styled.div`
    width: 400px;
    min-width: 400px;
    height: 400px;
    background-color: rgba(0,173,181,0.5);
    border-radius: 50%;
    border: 2px solid #e1f1dd;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:auto;
`

export const Header = styled.h1`
    color: white;
    font-family: 'Girassol', sans-serif;
    font-size: 2rem;
`;

export const StyledInput = styled.input`
    
    font-size: 1.5rem;
    width: 250px;
    border-radius: 5px;
    font-family: 'Girassol', sans-serif;
    background-color: rgba(0,0,0,0.6);
    border: none;
    color: white;
    margin: .5rem;
    text-indent: 20px;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const StyledButton = styled.button`
    font-size: 1.5rem;
    font-family: 'Girassol', sans-serif;
    background-color: rgba(0,0,0,0.6);
    border: none;
    color: white;
    margin: .5rem;
    cursor: pointer;
`;

export const StyledImage = styled.img`
    width: 90px;
    margin: .5rem;
`;