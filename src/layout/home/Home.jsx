import Counter from "../../components/counter/Counter";
import "./Home.css";

const Home = () => {
	return (
		<div className="page">
			<div>
				<div className="tally-head">Online Tally Counter</div>
                <div className="add-btn">Add Counter</div>
			</div>
			<div className="counter-container">
				<Counter></Counter>
			</div>
		</div>
	);
};

export default Home;
