import { React } from "react";
import Navbar_pc from "./Navbar_pc";
import Navbar_moblie from "./Navbar_moblie";
function Navbar() {
	return (
		<>
			<div className="hidden lg:block">
				<Navbar_pc />
			</div>
			<div className="lg:hidden">
				<Navbar_moblie />
			</div>
		</>
	);
}

export default Navbar;
