import React, { Component } from "react";
import "../../App.css";
import firebase from "../../firebase";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class AdminSingleCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eventsCard: {},
			key: "",
		};
	}

	componentDidMount() {
		const ref = firebase
			.firestore()
			.collection("eventsCards")
			.doc(this.props.match.params.id);
		ref.get().then((doc) => {
			if (doc.exists) {
				this.setState({
					eventsCard: doc.data(),
					key: doc.id,
					isLoading: false,
				});
			} else {
				console.log("No such document!");
			}
		});
	}

	delete(id) {
		firebase
			.firestore()
			.collection("eventsCards")
			.doc(id)
			.delete()
			.then(() => {
				console.log("Document successfully deleted!");
				this.props.history.push("/AdminShowCard");
			})
			.catch((error) => {
				console.error("Error removing document: ", error);
			});
	}

	render() {
		return (
			<div class="container">
				<div className="AdminSingleCard-Container">
					<Card className="card">
						<Card.Header as="h5">{this.state.eventsCard.header}</Card.Header>
						<Card.Body>
							<Card.Title>{this.state.eventsCard.title}</Card.Title>
							<Card.Text>{this.state.eventsCard.body}</Card.Text>
							<Card.Text>{this.state.eventsCard.link}</Card.Text>
							<Button variant="primary">{this.state.eventsCard.button}</Button>
						</Card.Body>
					</Card>
				</div>
				<div className="AdminSingleCard-Container-buttons">
					<Link to={`/AdminEditCard/${this.state.key}`} class="btn btn-success">
						Edit
					</Link>
					&nbsp;
					<button
						onClick={this.delete.bind(this, this.state.key)}
						class="btn btn-danger"
					>
						Delete
					</button>
				</div>
			</div>
		);
	}
}

export default AdminSingleCard;
