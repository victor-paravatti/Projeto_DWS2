import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.25)),
		url(https://static.fabapp.com/613613a94edb00b58ce58fea1e1ced45a83a5775) center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: white;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0px;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: #195128;
	color: white;
	cursor: pointer;
	font-weight: 500;
	margin-bottom: 10px;
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Login = () => {
	return (
		<Container>
			{" "}
			<Wrapper>
				<Title>ENTRAR</Title>
				<Form>
					<Input placeholder="email" />
					<Input placeholder="senha" />
					<Button>CONTINUAR</Button>
					<Link>Esqueceu sua senha?</Link>
					<Link>CRIAR CONTA</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
