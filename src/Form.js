import { useState } from "react";
import axios from "axios";

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

export default Form;
