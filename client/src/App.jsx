import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
  } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<Router>
			<Routes>
				<Route exatc path="/" element={<Home></Home>}></Route>
				<Route path="/products/" element={<ProductList></ProductList>}></Route>
				<Route path="/products/:category" element={<ProductList></ProductList>}></Route>
				<Route path="/product/:id" element={<Product></Product>}></Route>
				<Route path="/cart" element={<Cart></Cart>}></Route>
				<Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
				<Route path="/register" element={user ? <Navigate to="/" /> : <Register />}></Route>
				<Route path="/success" element={<Success></Success>}></Route>
			</Routes>
		</Router>
	);
};

export default App;
