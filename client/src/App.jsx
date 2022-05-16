import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
  } from "react-router-dom";

const App = () => {
	const user = true;
	return (
		<Router>
			<Routes>
				<Route exatc path="/" element={<Home></Home>}></Route>
				<Route path="/products/:category" element={<ProductList></ProductList>}></Route>
				<Route path="/product/:id" element={<Product></Product>}></Route>
				<Route path="/cart" element={<Cart></Cart>}></Route>
				<Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
				<Route path="/register" element={user ? <Navigate to="/" /> : <Register />}></Route>
			</Routes>
		</Router>
	);
};

export default App;
