import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import firebaseDb from "../firebase";
import { useHistory } from "react-router-dom";


function Bookings() {
	const inistialFieldValues = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		comment: "",
		option: "",
	};
	var [values, setvalues] = useState(inistialFieldValues);

	const handleInputChange = (e) => {
		var { name, value } = e.target;
		setvalues({
			...values,
			[name]: value,
		});
	};

	// const [show, setShow] = useState(true);
	// if (show) {
	// 	return (
	// 		<Alert variant="danger" onClose={() => setShow(false)} dismissible>
	// 			<Alert.Heading>Oh snap! You got an error!</Alert.Heading>
	// 			<p>
	// 				Change this and that and try again. Duis mollis, est non commodo
	// 				luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
	// 				Cras mattis consectetur purus sit amet fermentum.
	// 			</p>
	// 		</Alert>
	// 	);
	// }

	let history = useHistory();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		addOrEdit(values);
		history.push("./");
		//it redirects to home after the submit is pressed
		//ADD A FUNCTION THAT POPS A MESSAGE WITH A THANK YOU
		//i need an if statement what trigers an alert message and then the history.push
	};

	const addOrEdit = (obj) => {
		firebaseDb.child("students").push(obj, (err) => {
			if (err) console.log(err);
		});
	};

	return (
		<div>
			<div className="form-container">
				<Form autoComplete="off" onSubmit={handleFormSubmit}>
					<Form.Group controlId="formBasicFName">
						<Form.Label>First Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="First Name"
							name="firstName"
							value={values.firstName}
							onChange={handleInputChange}
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
							name="lastName"
							value={values.lastName}
							onChange={handleInputChange}
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							name="email"
							value={values.email}
							onChange={handleInputChange}
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Phone</Form.Label>
						<Form.Control
							type="text"
							placeholder="0412345678"
							name="phone"
							value={values.phone}
							onChange={handleInputChange}
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Label>Please Select a Session</Form.Label>
						<Form.Control
							as="select"
							name="option"
							value={values.option}
							onChange={handleInputChange}
						>
							<option>Choose</option>
							<option>Session 1</option>
							<option>Session 2</option>
							<option>Session 3</option>
							<option>Upload Document</option>
						</Form.Control>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<a href="url">Terms of Service</a>
						<Form.Check
							type="checkbox"
							label="I have read and I Accept the Terms of Service"
						/>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Leave a Comment</Form.Label>
						<Form.Control
							as="textarea"
							rows="3"
							placeholder="Leave a comment..."
							name="comment"
							value={values.comment}
							onChange={handleInputChange}
						/>
					</Form.Group>
					<Button variant="primary" type="submit" value="save">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
}

export default Bookings;
