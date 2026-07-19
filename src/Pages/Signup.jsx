import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
function Signup() {
	return (
		<div className="w-full h-screen bg-blue-100 flex justify-center items-center">
			<div className="lg:w-[50%] w-[80%] p-5 h-[80%] bg-blue-300 shadow-2xl flex flex-col items-center justify-center gap-5 rounded-2xl">
				<MdAccountCircle className="size-40"></MdAccountCircle>
				<h1 className="lg:text-3xl text-xl tracking-tighter">COUSTOMER SIGN UP</h1>
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
						type="email"
						placeholder="Email"
						className="border-3 rounded-xl px-4 py-3"
					></input>
					<input
						type="text"
						placeholder="Passward"
						className="border-3 rounded-xl px-4 py-3"
					></input>
					<button
						type="submit"
						className="cursor-pointer border-3 rounded-xl px-10 py-3 bg-black text-white font-extrabold border-black "
					>
						Sign Up
					</button>
				</form>
				<Link to="/login">Already have an account</Link>
			</div>
		</div>
	);
}

export default Signup;
