import React from "react";
//React DOM
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import Availability from "./Component/Availability";
import Bookings from "./Component/Bookings";
import Content from "./Component/Content";
import Contact from "./Component/Contact";
import Practice from "./Component/Practice";
import About from "./Component/About";
import Quiz from "./Component/Quiz";
import AdminHome from "./Component/Admin/AdminHome";
import AdminCreateCard from "./Component/Admin/AdminCreateCard";
import AdminEditCard from "./Component/Admin/AdminEditCard";
import AdminShowCard from "./Component/Admin/AdminShowCard";
import AdminSingleCard from "./Component/Admin/AdminSingleCard";

function App() {
	return (
		<div>
			<>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/About" component={About} />
						<Route path="/Admin" component={AdminHome} />
						<Route path="/AdminCreateCard" component={AdminCreateCard} />
						<Route path="/AdminEditCard/:id" component={AdminEditCard} />
						<Route path="/AdminShowCard" component={AdminShowCard} />
						<Route path="/AdminSingleCard/:id" component={AdminSingleCard} />
						<Route path="/Availability" component={Availability} />
						<Route path="/Bookings" component={Bookings} />
						<Route path="/Content" component={Content} />
						<Route path="/Contact" component={Contact} />
						<Route path="/Practice" component={Practice} />
						<Route path="/Quiz" component={Quiz} />
					</Switch>
				</BrowserRouter>
			</>
		</div>
	);
}

export default App;
