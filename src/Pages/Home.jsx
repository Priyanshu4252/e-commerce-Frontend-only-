import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import Navbar from "../components/Navbar";
import ExpandCard from "../components/ExpandCard";

function App() {
	const [products, setProducts] = useState([]);
	const [data, setData] = useState({});
	const [cart, setCart] = useState([]);
	const [expand, setExpand] = useState(false);

	function addToCart(value) {
		setCart((prev) => [
			...prev,
			{
				productid: value.id,
				quantity: 1,
			},
		]);
	}

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

	function handleonclick(value) {
		setData(value);
		setExpand(true);
	}

	function closecard() {
		setExpand(false);
		// console.log(expand);
	}

	return (
		<div className="bg-blue-100 min-h-screen p-2 pt-5 lg:p-5">
			<Navbar cart={cart} />
			<div className="flex overflow-hidden pt-5 relative">
				<div
					className={` flex ${expand ? "w-[0%] lg:w-[75%]" : "w-full"} transition-all duration-10 gap-6 lg:gap-13  flex-wrap justify-center items-center overflow-y-auto scrollbar-none `}
				>
					{products.map((value, index) => {
						return (
							<Card
								value={value}
								key={value.id}
								handleonclick={() => {
									handleonclick(value);
								}}
								addToCart={() => {
									addToCart(value);
								}}
							/>
						);
					})}
				</div>
				<div
					className={`${expand ? "w-[100%] lg:w-[25%]" : "w-0"} absolute right-0 top-5 bottom-0  transition-all duration-300 overflow-y-auto scrollbar-none`}
				>
					<ExpandCard value={data} click={() => closecard()} />
				</div>
			</div>
		</div>
	);
}

export default App;
