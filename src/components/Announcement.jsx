import React from "react";
import styled from "styled-components";

const Container = styled.div`
	border-bottom: 0.5px solid white;
	height: 25px;
	background-color: #46add6;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12;
	font-weight: 400;
`;

const Announcement = () => {
	return <Container>Cupon de desconto 5% : PedroMaromba</Container>;
};

export default Announcement;
