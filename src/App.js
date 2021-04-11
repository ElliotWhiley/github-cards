import "./App.css";
import React, { useState } from "react";
import Form from "./Form.js";
import CardList from "./CardList.js";

const App = (props) => {
	const [profiles, setProfiles] = useState([]);

	return (
		<div className="header">
			<div className="header">{props.title}</div>
			<Form onSubmit={(profile) => setProfiles([...profiles, profile])} />
			<CardList profiles={profiles} />
		</div>
	);
};

export default App;
