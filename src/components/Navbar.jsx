import { React } from "react";
import Navbar_pc from "./Navbar_pc";
import Navbar_moblie from "./Navbar_moblie";
function Navbar({ cart }) {
	return (
		<>
			<div className="hidden lg:block">
				<Navbar_pc cart={cart} />
			</div>
			<div className="lg:hidden">
				<Navbar_moblie cart={cart} />
			</div>
		</>
	);
}

export default Navbar;
