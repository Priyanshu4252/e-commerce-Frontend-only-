import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";

function Cart({ cart }) {
	const { state } = useLocation();
	const [cartdata, setCartdata] = useState([]);

	useEffect(() => {
		state.cart.forEach((element) => {
			const getProducts = async () => {
				const response = await axios.get(
					`https://fakestoreapi.com/products/${element.productid}`,
				);
				const finalResponse = {
					...response.data,
					quantity: element.quantity,
				};
				setCartdata((prev) => [...prev, finalResponse]);
			};
			getProducts();
		});
	}, []);
	console.log(cartdata);

	const quantityInc = (id) => {
		setCartdata((prev) =>
			prev.map((item) =>
				item.id === id
					? { ...item, quantity: item.quantity + 1 }
					: item,
			),
		);
	};

	const quantityDec = (id) => {
		setCartdata((prev) =>
			prev.map((item) =>
				item.id === id
					? { ...item, quantity: Math.max(0, item.quantity - 1) }
					: item,
			),
		);
	};

	const total = cartdata.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	return (
		<div className="w-full min-h-screen bg-blue-100 p-10 ">
			<div className="flex flex-col gap-10 ">
				{cartdata.map((value, index) => {
					return (
						<div
							key={index}
							className="w-full bg-blue-300 rounded-2xl shadow-2xl flex justify-between items-center gap-10 p-5"
						>
							<img
								src={value.image}
								className="object-scale-down rounded-2xl overflow-hidden w-30 h-40"
							/>
							<div className="h-full w-100 leading-5 py-3 px-2 text-sm lg:text-base tracking-tighter lg:tracking-normal text-center ">
								{value.title}
							</div>
							<div className="flex items-center justify-center border-2 rounded-xl">
								<HiOutlinePlus
									className=" size-10  font-this"
									onClick={() => quantityInc(value.id)}
								/>
								<div className=" w-12 size-10 flex justify-center items-center">
									{value.quantity}
								</div>
								<HiOutlineMinus
									className=" size-10"
									onClick={() => quantityDec(value.id)}
								/>
							</div>
							<div>
								${value.price * value.quantity.toFixed(2)}
							</div>
						</div>
					);
				})}
			</div>
			<div className=" flex justify-center items-center sticky bottom-0 w-full h-20">
				<Link to={"/"}>
					<button className="bg-red-300 px-60 py-5 rounded-2xl">
						Pay {total.toFixed(2)}
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Cart;
