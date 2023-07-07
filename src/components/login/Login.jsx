import { useForm } from "react-hook-form";
import "./Login";

const Login = () => {
	const { register, handleSubmit , reset } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	return (
		<div>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<div>Your Email</div>
					<input required {...register("email")} />
				</div>
				<div>
					<div>Your Password</div>
					<input required {...register("pass")} />
				</div>
				<div>
					<input type="submit" />
				</div>
			</form>
		</div>
	);
};

export default Login;
