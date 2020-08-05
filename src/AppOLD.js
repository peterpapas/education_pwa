import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//import Navbar from "react-bootstrap/Navbar";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
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
	faBullhorn,
	faCommentDots,
	faPuzzlePiece,
	faFilePdf,
	faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
function App() {
	return (
		<div className="App">
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<FontAwesomeIcon size="1x" icon={faGraduationCap} />
					React Bootstrap
				</Navbar.Brand>
			</Navbar>
			<div>
				<p>Count down </p>
			</div>
			<div class="scrolling-wrapper">
				<Card className="card">
					<Card.Header as="h5">Featured</Card.Header>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>

				<Card className="card">
					<Card.Header as="h5">Featured</Card.Header>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>

				<Card className="card">
					<Card.Header as="h5">Featured</Card.Header>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>

				<Card className="card">
					<Card.Header as="h5">Featured</Card.Header>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>

				<Card className="card">
					<Card.Header as="h5">Featured</Card.Header>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>

				<Card className="card">
					<Card.Header as="h5">Featured</Card.Header>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>

				<Card className="card">
					<Card.Header as="h5">Featured</Card.Header>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>

				<Card className="card">
					<Card.Header as="h5">Featured</Card.Header>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>

				<Card className="card">
					<Card.Header as="h5">Featured</Card.Header>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</div>
			<div className="container-buttons-grid">
				<Button className="grid-button" variant="primary">
					<FontAwesomeIcon size="3x" icon={faCalendarCheck} />
					<p>Availability</p>
				</Button>{" "}
				<Button className="grid-button" variant="primary">
					<FontAwesomeIcon size="3x" icon={faAddressBook} />
					<p>My Bookings</p>
				</Button>{" "}
				<Button className="grid-button" variant="primary">
					<FontAwesomeIcon size="3x" icon={faFilePdf} />
					<p>Content</p>
				</Button>{" "}
				<Button className="grid-button" variant="primary">
					<FontAwesomeIcon size="3x" icon={faPuzzlePiece} />
					<p>Practice</p>
				</Button>{" "}
				<Button className="grid-button" variant="primary">
					<FontAwesomeIcon size="3x" icon={faQuestionCircle} />
					<p>About</p>
				</Button>{" "}
				<Button className="grid-button" variant="primary">
					<FontAwesomeIcon size="3x" icon={faCommentDots} />
					<p>FAQ</p>
				</Button>{" "}
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

export default App;
