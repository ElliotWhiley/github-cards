import "./App.css";
import React, { useState } from "react";
import axios from "axios";

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

const CardList = (props) => {
	return (
		<div>
			{props.profiles.map((profile) => (
				<Card key={profile.id} {...profile} />
			))}
		</div>
	);
};

const Card = (props) => {
	return (
		<div className="github-profile" style={{ margin: "1rem" }}>
			<img src={props.avatar_url} alt="" />
			<div
				className="info"
				style={{ display: "inline-block", marginLeft: 10 }}
			>
				<div className="name" style={{ fontSize: "125%" }}>
					{props.name}
				</div>
				<div className="company">{props.company}</div>
			</div>
		</div>
	);
};

const Form = (props) => {
	const [userName, setUserName] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		let response;
		try {
			response = await axios.get(
				`https://api.github.com/users/${userName}`
			);
		} catch (exception) {
			console.log("caught it!", exception);
			return;
		}

		props.onSubmit(response.data);
		setUserName("");
		document.getElementById("username-input").focus();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={userName}
				onChange={(event) => setUserName(event.target.value)}
				placeholder="GitHub username"
				required
				id="username-input"
			/>
			<button>Add card</button>
		</form>
	);
};

export default App;
