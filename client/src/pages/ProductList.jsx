import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
	margin: 20px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
	${mobile({ margin: "0px 20px", diplay: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>Produtos</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filtrar: </FilterText>
					<Select>
						<Option disabled selected>
							Suplemento
						</Option>
						<Option>Creatina</Option>
						<Option>Pré Treino</Option>
						<Option>BCA</Option>
						<Option>Whey</Option>
						<Option>Deca</Option>
						<Option>Durateston</Option>
						<Option>Chá Verde</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Tamanho
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Ordenar: </FilterText>
					<Select>
						<Option selected>Recentes</Option>
						<Option>Preço (menor)</Option>
						<Option>Preço (maior)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductList;
