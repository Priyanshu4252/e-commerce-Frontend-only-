import { useState, React } from "react";
import { Link } from "react-router-dom";
import { GoSidebarCollapse } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

function Navbar_moblie({ cart }) {
	const [expand, setExpand] = useState(false);

	return (
		<>
			<div
				className={`w-full h-20 px-10 py-3 flex justify-center items-center bg-blue-300  ${expand ? "rounded-t-2xl duration-30" : "rounded-2xl duration-1000"} transition-all `}
			>
				<div className="flex w-full justify-between items-center gap-3">
					<div>
						<button
							className={`z-50 ${expand ? "rotate-270" : "rotate-90"} transition-transform duration-300`}
							onClick={() => {
								setExpand(!expand);
							}}
						>
							<GoSidebarCollapse className="size-8" />
						</button>
					</div>
					<div className="flex gap-5 items-center">
						<img
							src="https://fakestoreapi.com/icons/logo.png"
							alt="Fake Store Logo"
							className="w-15 h-15"
						/>
						<h1 className="text-2xl tracking-tighter select-none">
							Fake Store
						</h1>
					</div>
					<div>
						<Link
							className="px-3 py-2 rounded-xl bg-orange-300 flex gap-2 items-center text-2xl tracking-tighter"
							state={{ cart }}
							to={"/cart"}
						>
							<IoCartOutline />
							Cart <h1 className="text-xl">{cart.length}</h1>
						</Link>
					</div>
				</div>
			</div>
			<div
				className={`w-full transition-all overflow-hidden duration-300 flex flex-col justify-center bg-blue-300 rounded-b-2xl items-center gap-7 text-2xl tracking-tighter ${
					expand ? "max-h-80 py-7" : "max-h-0 py-0"
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
