import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
function Login() {
	return (
		<div className="w-full h-screen bg-blue-100 flex justify-center items-center">
			<div className="w-[50%] h-[80%] bg-blue-300 shadow-2xl flex flex-col items-center justify-center gap-5 rounded-2xl">
				<MdAccountCircle className="size-40"></MdAccountCircle>
				<h1 className="text-3xl">COUSTOMER LOGIN</h1>
				<form
					action="Login"
					method="post"
					className="flex flex-col items-center justify-center gap-3"
				>
					<input
						type="text"
						placeholder="Username"
						className="border-3 rounded-xl px-4 py-3"
					></input>
					<input
						type="text"
						placeholder="Passward"
						className="border-3 rounded-xl px-4 py-3"
					></input>
					<button
						type="submit"
						className="border-3 rounded-xl px-10 py-3 bg-black text-white font-extrabold border-black "
					>
						Login
					</button>
				</form>
				<Link to="/signup">Don't have an account</Link>
			</div>
		</div>
	);
}

export default Login;
