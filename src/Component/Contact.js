import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "../App.css";

function FAQ() {
	return (
		<div>
			<Card className="contacts-cards">
				<Card.Header>Contact Me</Card.Header>
				<Card.Body>
					<p>Email:myemail@email.com</p>
					<p>Phone:0421435678</p>
				</Card.Body>
			</Card>
			<Card className="contacts-cards">
				<Card.Header>FAQ</Card.Header>
				<Card.Body>
					<Card.Title>Check out some Common question bellow.</Card.Title>
					<Accordion defaultActiveKey="">
						<Card className="contacts-cards">
							<Accordion.Toggle as={Card.Header} eventKey="0">
								Is this an example question ?
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="0">
								<Card.Body>
									Yes!, Hello! I'm the body of the example question.
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className="contacts-cards">
							<Accordion.Toggle as={Card.Header} eventKey="1">
								Click me!
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
								<Card.Body>Hello! I'm another body</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className="contacts-cards">
							<Accordion.Toggle as={Card.Header} eventKey="2">
								Click me!
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="2">
								<Card.Body>Hello! I'm another body</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className="contacts-cards">
							<Accordion.Toggle as={Card.Header} eventKey="3">
								Click me!
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="3">
								<Card.Body>Hello! I'm another body</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</Card.Body>
			</Card>

			<Card className="contacts-cards">
				<Card.Header>Enquire Form</Card.Header>
				<Card.Body>
					<Card.Title>
						Please fill in the form bellow for further enquires
					</Card.Title>
					<Card.Text>
						With supporting text below as a natural lead-in to additional
						content.
					</Card.Text>
					<Form>
						<Form.Group controlId="formBasicFName">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="First Name"
								name="firstName"
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicLName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Last Name"
								name="lasttName"
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicFName">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="text"
								placeholder="email@email.com"
								name="email"
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicphone">
							<Form.Label>Phone</Form.Label>
							<Form.Control type="text" placeholder="phone" name="phone" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Leave a Comment</Form.Label>
							<Form.Control
								as="textarea"
								rows="3"
								placeholder="Leave a comment..."
								name="comment"
							/>
						</Form.Group>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
}

export default FAQ;
