/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Counter.css";

const Counter = () => {
	const [num, setNum] = useState(0);
	const [none, setNone] = useState(false);

	const addNum = () => {
		setNum(num + 1);
	};

	const negNum = () => {
		setNum(num - 1);
	};

	const resetNum = () => {
		setNum(0);
	};

	const handleNone = () => {
		setNone(true);
	};

	return (
		<div>
			<div className={none ? "d-none counter" : "counter"}>
				<div onClick={handleNone} className="x">
					x
				</div>
				<div className="counter-name">tally counter</div>

				<div className="input-style">
					<span className="px-5">{num}</span>
				</div>

				<div className="btn-count">
					<button onClick={negNum} className="btn w-100">
						-
					</button>
					<button onClick={addNum} className="btn w-100">
						+
					</button>
				</div>
				<div className="btn-group">
					<button onClick={resetNum} className="btn">
						Reset counter
					</button>
					<button className="btn">Start value</button>
					<button className="btn">Rename</button>
				</div>
			</div>
		</div>
	);
};

export default Counter;
