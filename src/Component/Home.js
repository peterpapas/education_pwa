import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
//Material UI
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MenuIcon from "@material-ui/icons/Menu";
//FontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarCheck,
	faAddressBook,
	faQuestionCircle,
	faPuzzlePiece,
	faFilePdf,
	faGraduationCap,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
//Firebase
import firebase from "../firebase";

class Home extends Component {
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
	//--If cards dont work go to firebase>firestore>security rules> and extend the time/date to accept API requests
	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home">
						<FontAwesomeIcon size="1x" icon={faGraduationCap} />
						React Bootstrap
					</Navbar.Brand>
				</Navbar>
				<div>
					<p>Count down </p>
				</div>

				<div className="scrolling-wrapper">
					{this.state.eventsCards.map((eventsCard) => (
						<Card className="card">
							<Card.Header as="h5">{eventsCard.header}</Card.Header>
							<Card.Body>
								<Card.Title>{eventsCard.title}</Card.Title>
								<Card.Text>{eventsCard.body}</Card.Text>
								<Link to={eventsCard.link}>
									<Button variant="primary">{eventsCard.button}</Button>
								</Link>
							</Card.Body>
						</Card>
					))}
				</div>
				<div className="container-buttons-grid">
					<Link className="grid-button" to="/Availability">
						<Button variant="primary" block>
							<FontAwesomeIcon size="3x" icon={faCalendarCheck} />
							<p>Availability</p>
						</Button>{" "}
					</Link>
					<Link className="grid-button" to="/Bookings">
						<Button variant="primary" block>
							<FontAwesomeIcon size="3x" icon={faAddressBook} />
							<p>My Bookings</p>
						</Button>{" "}
					</Link>
					<Link className="grid-button" to="/Content">
						<Button variant="primary" block>
							<FontAwesomeIcon size="3x" icon={faFilePdf} />
							<p>Content</p>
						</Button>{" "}
					</Link>
					<Link className="grid-button" to="/Practice">
						<Button variant="primary" block>
							<FontAwesomeIcon size="3x" icon={faPuzzlePiece} />
							<p>Practice</p>
						</Button>{" "}
					</Link>
					<Link className="grid-button" to="/About">
						<Button variant="primary" block>
							<FontAwesomeIcon size="3x" icon={faQuestionCircle} />
							<p>About</p>
						</Button>{" "}
					</Link>
					<Link className="grid-button" to="/Contact">
						<Button variant="primary" block>
							<FontAwesomeIcon size="3x" icon={faPhone} />
							<p>Contact Us</p>
						</Button>{" "}
					</Link>
				</div>
				<div>
					{/* https://material-ui.com/components/bottom-navigation/#api LINK VALUES TO LINKS I THINK */}
					<BottomNavigation
					// value={value}
					// onChange={(event, newValue) => {
					// 	setValue(newValue);
					// }}
					// showLabels
					// className={classes.root}
					>
						<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
						<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
						<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
						<BottomNavigationAction label="Menu" icon={<MenuIcon />} />
					</BottomNavigation>
				</div>
			</div>
		);
	}
}
export default Home;
