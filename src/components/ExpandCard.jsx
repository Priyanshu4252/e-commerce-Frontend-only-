import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
function ExpandCard({ value, click }) {
	const { description, image, price, title, id } = value;
	console.log(value);

	return (
		<div className="bg-blue-300 min-h-full shadow-2xl rounded-2xl py-2 px-1 flex flex-col items-center ">
			<div className="p-3 pb-15 w-full h-full flex flex-col justify-start items-center relative">
				<IoIosCloseCircle
					onClick={click}
					className="absolute left-5 top-5 size-10"
				></IoIosCloseCircle>
				<img
					id="image"
					className="rounded-2xl w-full h-100 object-scale-down overflow-hidden "
					src={image}
				></img>
				<div className="py-3 px-2 text-sm lg:text-xl font-bold text-center tracking-tighter lg:tracking-normal">
					{title}
				</div>
				<div className="font-extrabold">DESCRIPTION</div>
				<div className="leading-6 py-3 px-2 text-sm lg:text-lg text-start tracking-tighter lg:tracking-tighter">
					{description}
					{description}
					{description}
				</div>
				<button className="w-[95%] px-1 py-1 lg:px-3 lg:py-2 bg-orange-300 rounded-xl text-sm font-bold hover:bg-orange-200 absolute bottom-5">
					Add to Cart
				</button>
			</div>
		</div>
	);
}

export default ExpandCard;
