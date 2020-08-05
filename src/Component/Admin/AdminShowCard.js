import React, { Component } from "react";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

class AdminShowCard extends Component {
	constructor(props) {
		super(props);
		this.ref = firebase.firestore().collection("eventsCards");
		this.unsubscribe = null;
		this.state = {
			eventsCards: [],
		};
	}

	onCollectionUpdate = (querySnapshot) => {
		const eventsCards = [];
		querySnapshot.forEach((doc) => {
			const { body, button, header, title, link } = doc.data();
			eventsCards.push({
				key: doc.id,
				doc, // DocumentSnapshot
				body,
				button,
				header,
				title,
				link,
			});
		});
		this.setState({
			eventsCards,
		});
	};

	componentDidMount() {
		this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
	}

	render() {
		return (
			<div class="container">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">CARDS LIST</h3>
					</div>
					<div class="panel-body">
						<h4>
							<Link to="/AdminCreateCard">Add events Card</Link>
						</h4>
						<table class="table table-stripe">
							<thead>
								<tr>
									<th>Header</th>
									<th>Title</th>
									<th>Description</th>
									<th>Button</th>
									<th>Link</th>
								</tr>
							</thead>
							<tbody>
								{this.state.eventsCards.map((eventsCard) => (
									<tr>
										<td>
											<Link to={`/AdminSingleCard/${eventsCard.key}`}>
												{eventsCard.header}
											</Link>
										</td>
										<td>{eventsCard.title}</td>
										<td>{eventsCard.body}</td>
										<td>{eventsCard.button}</td>
										<td>{eventsCard.link}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default AdminShowCard;
