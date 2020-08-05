import React, { Component } from "react";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

class AdminEditCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: "",
			header: "",
			title: "",
			body: "",
			button: "",
			link: "",
		};
	}

	componentDidMount() {
		const ref = firebase
			.firestore()
			.collection("eventsCards")
			.doc(this.props.match.params.id);
		ref.get().then((doc) => {
			if (doc.exists) {
				const eventsCard = doc.data();
				this.setState({
					key: doc.id,
					header: eventsCard.header,
					title: eventsCard.title,
					body: eventsCard.body,
					button: eventsCard.button,
					link: eventsCard.link,
				});
			} else {
				console.log("No such document!");
			}
		});
	}

	onChange = (e) => {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState({ eventsCard: state });
	};

	onSubmit = (e) => {
		e.preventDefault();

		const { header, title, body, button, link } = this.state;

		const updateRef = firebase
			.firestore()
			.collection("eventsCards")
			.doc(this.state.key);
		updateRef
			.set({
				header,
				title,
				body,
				button,
				link,
			})
			.then((docRef) => {
				this.setState({
					key: "",
					header: "",
					title: "",
					body: "",
					button: "",
					link: "",
				});
				this.props.history.push(
					"/AdminSingleCard/" + this.props.match.params.id
				);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
	};

	render() {
		return (
			<div class="container">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">EDIT BOARD</h3>
					</div>
					<div class="panel-body">
						<h4>
							<Link
								to={`/AdminSingleCard/${this.state.key}`}
								class="btn btn-primary"
							>
								Board List
							</Link>
						</h4>
						<form onSubmit={this.onSubmit}>
							<div class="form-group">
								<label for="header">Header:</label>
								<input
									type="text"
									class="form-control"
									name="header"
									value={this.state.header}
									onChange={this.onChange}
									placeholder="header"
								/>
							</div>
							<div class="form-group">
								<label for="title">Title:</label>
								<input
									type="text"
									class="form-control"
									name="title"
									value={this.state.title}
									onChange={this.onChange}
									placeholder="Title"
								/>
							</div>
							<div class="form-group">
								<label for="description">Description:</label>
								<input
									type="text"
									class="form-control"
									name="body"
									value={this.state.body}
									onChange={this.onChange}
									placeholder="Description"
								/>
							</div>
							<div class="form-group">
								<label for="author">Button:</label>
								<input
									type="text"
									class="form-control"
									name="button"
									value={this.state.button}
									onChange={this.onChange}
									placeholder="Button"
								/>
							</div>
							<div class="form-group">
								<label for="author">Link:</label>
								<input
									type="text"
									class="form-control"
									name="link"
									value={this.state.link}
									onChange={this.onChange}
									placeholder="Link"
								/>
							</div>
							<button type="submit" class="btn btn-success">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AdminEditCard;
