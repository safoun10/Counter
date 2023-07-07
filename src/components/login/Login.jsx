/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import { useForm } from "react-hook-form";
import "./Login.css";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth();
const Login = () => {
	const { register, handleSubmit, reset } = useForm();

	const { loginUser, GoogleProvider } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const onSubmit = (data) => {
		const email = data.email;
		const password = data.pass;

		loginUser(email, password)
			.then(() => {
				navigate(from, { replace: true });
				reset();
			})
			.catch(() => {});
	};

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, GoogleProvider)
			.then(() => {
				navigate(from, { replace: true });
			})
			.catch(() => {});
	};

	return (
		<div>
			{/* <form className="form" onSubmit={handleSubmit(onSubmit)}>
				<div className="input-section">
					<div className="input-head">Your Email</div>
					<input
						className="input-field"
						required
						{...register("email")}
					/>
				</div>
				<div className="input-section">
					<div className="input-head">Your Password</div>
					<input
						className="input-field"
						type="password"
						required
						{...register("pass")}
					/>
				</div>
				<div className="submit-box">
					<input className="submit" type="submit" value={"Login"} />
				</div>
			</form>
			<div className="or">
				<hr className="hr" />
				<div className="or-text">OR</div>
				<hr className="hr" />
			</div> */}
			<div>
				<div onClick={handleGoogleSignIn} className="google">
					Login with google
				</div>
			</div>
		</div>
	);
};

export default Login;
