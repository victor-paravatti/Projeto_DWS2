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
	width: 40%;
	padding: 20px;
	background-color: white;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;
const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;
const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: #195128;
	color: white;
	cursor: pointer;
	font-weight: 500;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CRIAR CONTA</Title>
				<Form>
					<Input placeholder="nome" />
					<Input placeholder="sobrenome" />
					<Input placeholder="nome de usuario" />
					<Input placeholder="email" />
					<Input placeholder="senha" />
					<Input placeholder="confirmar senha" />
					<Agreement>
						Ao criar uma conta, concordo com o processamento dos meus dados pessoais
						dados de acordo com a <b>POLÍTICA DE PRIVACIDADE</b>
					</Agreement>
					<Button>CRIAR</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
