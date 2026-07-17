import React from "react";
import { useState } from "react";
import { FaExpandAlt } from "react-icons/fa";

function Card({value}) {
	const { description, image, price, title } = value;
	const [expand, setExpand] = useState(false);
	const [hover, setHover] = useState(false);
	return (
		<div
			id="main"
			className="bg-blue-200 h-fit w-40 lg:h-fit lg:w-60 border-2 rounded-2xl py-2 px-1 flex flex-col items-center " 
		>
			<div
				id="imageContainer"
				className="w-[95%] h-45 lg:h-60 relative "
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<div className=" z-1 w-full  flex  justify-end  absolute p-2">
					<FaExpandAlt className="text-white size-6 lg:hidden"></FaExpandAlt>
				</div>
				<div
					className={`select-none rounded-2xl w-full h-full bg-black/30 flex items-center justify-center font-bold text-white text-base lg:text-3xl absolute ${hover ? "z-1" : "hidden"}`}
				>
					Click to Expand
				</div>
				<img
					id="image"
					className="rounded-2xl w-full h-full object-fit overflow-hidden absolute"
					src={image}
				></img>
			</div>
			<div className="h-18 lg:h-24 overflow-hidden">
				<div className="leading-5 py-3 px-2 text-sm lg:text-base tracking-tighter lg:tracking-normal">{title}</div>
			</div>
			<div
				id="details"
				className="mt-2 h-10 w-[95%] flex justify-between items-center"
			>
				<h1 className="px-2 py-2 font-bold ">${price}</h1>
				<button className="px-1 py-1 lg:px-3 lg:py-2 bg-orange-300 rounded-xl text-sm font-bold">
					Add to Cart
				</button>
			</div>
		</div>
	);
}

export default Card;
