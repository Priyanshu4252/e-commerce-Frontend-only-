import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import Navbar from "../components/Navbar";
function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const response = await axios.get(
				"https://fakestoreapi.com/products",
			);
			// console.log(response.data);
			setProducts(response.data);
		};
		getProducts();
	}, []);
	console.log(products);

	return (
		<div className="bg-blue-100 w-full min-h-screen p-2 lg:p-5 ">
			<Navbar />
			<div
				id="cardHolder"
				className="flex gap-6 lg:gap-13  flex-wrap justify-center items-center"
			>
				{products.map((value, index) => {
					return <Card value={value} key={value.id} />;
				})}
			</div>
		</div>
	);
}

export default App;
