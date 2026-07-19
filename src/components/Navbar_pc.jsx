import { useState, React } from "react";
import { Link } from "react-router-dom";

function Navbar_pc() {
	return (
		<div className="w-full h-20 px-10 py-3 flex justify-between items-center bg-blue-300 shadow-xl rounded-2xl mb-10 ">
			<div className="flex justify-center items-center gap-3">
				<img
					src="https://fakestoreapi.com/icons/logo.png"
					alt="Fake Store Logo"
					className="w-15 h-15"
				/>
				<h1 className="text-2xl tracking-tighter select-none">
					Fake Store
				</h1>
			</div>
			<div className="flex justify-center  items-center gap-7 text-2xl tracking-tighter">
				<Link>Clothings</Link>
				<Link>Electronics</Link>
				<Link>Jewellery</Link>
				<Link>Others</Link>
			</div>
		</div>
	);
}

export default Navbar_pc;
