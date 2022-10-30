import React from "react";
import {
	FormContainer,
	Header,
	LoginContainer,
	StyledButton,
	StyledForm,
	StyledImage,
	StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal2.svg";
import { useNavigate } from "react-router-dom";

const Login = ({ isAuth, setIsAuth }) => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsAuth(true);
		navigate("/");
		localStorage.setItem('Auth', 'true')
	};
	return (
		<LoginContainer>
			<FormContainer>
				<StyledImage src={mealSvg} alt="logo" />
				<Header>{"<PennyNichols />"}</Header>
				<StyledForm onSubmit={handleSubmit}>
					<StyledInput required type="text" placeholder="Username" />
					<StyledInput required type="password" placeholder="Password" />
					<StyledButton>Login</StyledButton>
				</StyledForm>
			</FormContainer>
		</LoginContainer>
	);
};

export default Login;
