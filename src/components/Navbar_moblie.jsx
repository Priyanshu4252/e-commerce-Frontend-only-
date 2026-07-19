import { useState, React } from "react";
import { Link } from "react-router-dom";
import { GoSidebarCollapse } from "react-icons/go";

function Navbar_moblie() {
	const [expand, setExpand] = useState(false);

	return (
		<>
			<div className={`relative w-full h-20 px-10 py-3 flex justify-center items-center bg-blue-300  ${expand?"rounded-t-2xl duration-30":"rounded-2xl duration-1000"} transition-all `}>
				<div className="flex justify-center items-center gap-3">
					<button
						className={`absolute left-3 top-1/2 -translate-y-1/2 z-50 ${expand ? "rotate-270" : "rotate-90"} transition-transform duration-300`}
						onClick={() => {
							setExpand(!expand);
						}}
					>
						<GoSidebarCollapse className="size-8" />
					</button>
					<img
						src="https://fakestoreapi.com/icons/logo.png"
						alt="Fake Store Logo"
						className="w-15 h-15"
					/>
					<h1 className="text-2xl tracking-tighter select-none">
						Fake Store
					</h1>
				</div>
			</div>
			<div
				className={`w-full transition-all overflow-hidden duration-300 flex flex-col justify-center bg-blue-300 rounded-b-2xl items-center gap-7 text-2xl tracking-tighter ${
					expand ? "max-h-60 py-7" : "max-h-0 py-0"
				}`}
			>
				<Link>Clothings</Link>
				<Link>Electronics</Link>
				<Link>Jewellery</Link>
				<Link>Others</Link>
			</div>
		</>
	);
}

export default Navbar_moblie;
