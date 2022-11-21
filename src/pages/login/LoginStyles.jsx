import styled from "styled-components";

export const LoginContainer = styled.div`
	background-image: url("https://source.unsplash.com/random/900×700/?food");
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
	background-color: #7000b5da;
	border-radius: 50%;
	border: 2px solid #f1ddf0;
	padding-bottom: 35px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;
	perspective: 1000px;

	@media (max-width: 500px) {
		width: 300px;
		min-width: 300px;
		height: 300px;
		padding-bottom: 20px;
	}
`;

export const Logo = styled.div`
	transform: rotateY(360deg);
	animation: rotateAnimation 8s linear infinite;
    
	@keyframes rotateAnimation {
		from {
			transform: rotateY(360deg);
		}
		to {
			transform: rotateY(0deg);
		}
	}
`;

export const Header = styled.h1`
	color: white;
	font-family: "Dancing Script", cursive;
	font-size: 2rem;
    @media (max-width: 500px){
        font-size: 1.5rem;
    }
`;

export const StyledInput = styled.input`
	font-size: 1.2rem;
	width: 250px;
	border-radius: 5px;
	background-color: #ffffff50;
	border: none;
	color: #3f0762;
	margin: 0.5rem;
	text-indent: 20px;
	&:focus {
		outline: none;
		border: none;
	}
    @media (max-width: 500px){
        font-size: 1rem;
        width: 170px;
        margin: .2rem;
    }
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export const StyledButton = styled.button`
	font-size: 1.5rem;
	font-family: "Dancing Script", cursive;
	background-color: #ffffff95;
	border: none;
	color: #3f0762;
	padding: 0.5rem 0;
	margin: 0.5rem;
	cursor: pointer;
	&:hover {
		background-color: #fffffff1;
	}
    @media (max-width: 500px){
        padding: .2rem;
    }
`;

export const StyledImage = styled.img`
	width: 90px;
	margin: 0.5rem;
`;
