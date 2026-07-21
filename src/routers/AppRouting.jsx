import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Cart from "../Pages/Cart";
function AppRouting() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/signup" element={<Signup />}></Route>
			<Route path="/cart" element={<Cart />}></Route>
		</Routes>
	);
}

export default AppRouting;
