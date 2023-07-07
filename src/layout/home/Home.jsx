import { useState } from "react";
import Counter from "../../components/counter/Counter";
import "./Home.css";

const Home = () => {
	const [counters, setCounters] = useState([]);

	const handleClick = () => {
		setCounters([
			...counters,
			<Counter key={counters.length} />,
		]);
	};
	return (
		<div className="page">
			<div>
				<div className="tally-head">Online Tally Counter</div>
				<div onClick={handleClick} className="add-btn">
					Add Counter
				</div>
			</div>
			<div className="counter-container">
				{counters.map((calculator, index) => (
					<div key={index}>{calculator}</div>
				))}
				<Counter></Counter>
			</div>
		</div>
	);
};

export default Home;
