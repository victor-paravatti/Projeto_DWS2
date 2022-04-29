import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 60px;
	// background-color: #46add6;
	background-color: #195128;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #f1f1f1;
`;

const Left = styled.div`
	text-align: center;
	flex: 1;
`;

const Logo = styled.span`
	font-size: 25px;
	cursor: pointer;
	font-weight: 700;
`;

const Center = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	width: 90%;
	padding: 5px;
	background-color: white;
	border-radius: 10px;
`;

const Input = styled.input`
	border: none;
	margin: auto;
	width: 100%;
`;

const Right = styled.div`
	margin-right: 10px;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo>Double Biceps</Logo>
				</Left>
				<Center>
					<SearchContainer>
						<Input />
						<Search style={{ color: "gray", fontSize: "16px" }} />
					</SearchContainer>
				</Center>
				<Right>
					<MenuItem>Registrar</MenuItem>
					<MenuItem>Entrar</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary" />
						<ShoppingCartOutlined />
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
