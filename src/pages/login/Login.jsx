import React from "react";
import {
	FormContainer,
	Header,
	LoginContainer,
	Logo,
	StyledButton,
	StyledForm,
	StyledImage,
	StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal2.svg";
import { useNavigate } from "react-router-dom";
import { GiCupcake } from "react-icons/gi";

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
				<Logo>
					<GiCupcake style={{fontSize: '8rem', color:'white',}}/>
				</Logo>
				<Header>Penny Nichols</Header>
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
