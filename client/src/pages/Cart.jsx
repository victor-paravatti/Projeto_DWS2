import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) => (props.type === "filled" ? "black" : "transparent")};
	color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
	${mobile({ display: "none" })}
`;
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const Image = styled.img`
	width: 200px;
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;
const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100$;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`;

function Cart() {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>SEU CARRINHO</Title>
				<Top>
					<TopButton>CONTINUAR COMPRANDO</TopButton>
					<TopTexts>
						<TopText>Carrinho de compra (2)</TopText>
						<TopText>Lista de Desejos (0)</TopText>
					</TopTexts>
					<TopButton type="filled">CONFIRMAR COMPRA</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://d2vq4s943o8cb4.cloudfront.net/Custom/Content/Products/01/64/0164_deca-mass-igf1-integralmedica-2151_m5_636347652870786000.png" />
								<Details>
									<ProductName>
										<b>Produto:</b> DECA MASS
									</ProductName>
									<ProductId>
										<b>ID:</b> 123456987
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>Quantidade:</b> 1500g
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>3</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>R$ 80,00</ProductPrice>
							</PriceDetail>
						</Product>

						<Hr />

						<Product>
							<ProductDetail>
								<Image src="https://d2vq4s943o8cb4.cloudfront.net/Custom/Content/Products/24/56/24561178_whey-protein-concentrado-900g-dux-nutrition_m1_637865917363842317.png" />
								<Details>
									<ProductName>
										<b>Produto:</b> WHEY PROTEIN CONCENTRADO
									</ProductName>
									<ProductId>
										<b>ID:</b> 987564123
									</ProductId>
									<ProductColor color="red" />
									<ProductSize>
										<b>Quantidade:</b> 900g
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>1</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>R$ 200,00</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>RESUMO PEDIDO</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>R$ 280,00</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Taxa de Entrega</SummaryItemText>
							<SummaryItemPrice>R$ 20,00</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Desconto</SummaryItemText>
							<SummaryItemPrice>R$ -20,00</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>R$ 280,00</SummaryItemPrice>
						</SummaryItem>
						<Button>CONFIRMAR COMPRA</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
}

export default Cart;
