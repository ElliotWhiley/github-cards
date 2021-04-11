import Card from "./Card.js";

const CardList = (props) => {
	return (
		<div>
			{props.profiles.map((profile) => (
				<Card key={profile.id} {...profile} />
			))}
		</div>
	);
};

export default CardList;
