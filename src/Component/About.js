import React from "react";
import Card from "react-bootstrap/Card";

function About() {
	return (
		<div>
			<Card className="contacts-cards">
				<Card.Header>
					<h5>About</h5>
				</Card.Header>
				<Card.Body>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</Card.Body>
				<Card.Img variant="top" src="/About.png" />
			</Card>
		</div>
	);
}

export default About;
