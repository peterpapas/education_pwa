import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
//Firebase
import firebase from "../../firebase.js";

class Admin extends Component {
	constructor() {
		super();
		this.ref = firebase.firestore().collection("eventsCards");
		this.state = {
			body: "",
			button: "",
			header: "",
			title: "",
			link: "",
		};
	}
	onChange = (e) => {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	};

	onSubmit = (e) => {
		e.preventDefault();

		const { body, button, header, title, link } = this.state;

		this.ref
			.add({
				body,
				button,
				header,
				title,
				link,
			})
			.then((docRef) => {
				this.setState({
					body: "",
					button: "",
					header: "",
					title: "",
					link: "",
				});
				this.props.history.push("/");
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
	};
	render() {
		const { body, button, header, title, link } = this.state;
		return (
			<div>
				<Container>
					<Row>
						<Col md={{ span: 5, offset: 3 }}>
							<h3>Add Event</h3>
							<h5>Content Cards Form</h5>
							<section>
								<div className="">
									<Form autoComplete="off" onSubmit={this.onSubmit}>
										<Form.Group controlId="formBasicFName">
											<Form.Label>Header</Form.Label>
											<Form.Control
												type="text"
												placeholder="New Event"
												name="header"
												value={header}
												onChange={this.onChange}
											/>
											<Form.Text className="text-muted">
												This is the card Header top of the card. Needs max
												character length.
											</Form.Text>
										</Form.Group>
										<Form.Group controlId="formBasicFName">
											<Form.Label>Title</Form.Label>
											<Form.Control
												type="text"
												placeholder="Grammer"
												name="title"
												value={title}
												onChange={this.onChange}
											/>
											<Form.Text className="text-muted">
												This is the Title inside the card. Needs max character
												length.
											</Form.Text>
										</Form.Group>
										<Form.Group controlId="formBasicFName">
											<Form.Label>Body</Form.Label>
											<textArea
												class="form-control"
												name="body"
												value={body}
												onChange={this.onChange}
												placeholder="Description"
												cols="80"
												rows="3"
											></textArea>
											<Form.Text className="text-muted">
												This is the main content of the card. Needs max
												character length.
											</Form.Text>
										</Form.Group>
										<Form.Group controlId="formBasicFName">
											<Form.Label>Button</Form.Label>
											<Form.Control
												type="text"
												placeholder="Book Now!"
												name="button"
												value={button}
												onChange={this.onChange}
											/>
											<Form.Text className="text-muted">
												This is the text inside the button. Needs max character
												length.
											</Form.Text>
										</Form.Group>
										<Form.Group controlId="formBasicFName">
											<Form.Label>Link</Form.Label>
											<Form.Control
												type="text"
												placeholder="Bookings"
												name="link"
												value={link}
												onChange={this.onChange}
											/>
											<Form.Text className="text-muted">
												This links the button to the specific page inside
												component. Needs max character length.
											</Form.Text>
										</Form.Group>
										<button type="submit" class="btn btn-success">
											Submit
										</button>
									</Form>
								</div>
							</section>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
export default Admin;
