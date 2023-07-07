import { Outlet } from "react-router-dom";
import "./Auth.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Auth = () => {
	return (
		<div className="page">
			<div className="auth-head">
				Please Login before going to Counter Page
			</div>
			<div className="auth-section">
				<div className="column">
					<Player
						autoplay
						loop
						src="https://assets9.lottiefiles.com/private_files/lf30_kw5jwkm0.json"
						style={{ height: "300px", width: "300px" }}
					>
						<Controls
							visible={false}
							buttons={["play", "repeat", "frame", "debug"]}
						/>
					</Player>
				</div>
				<div className="column">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default Auth;