import React from "react";
import "../App.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

//moment.locale("en-GB");
const localizer = momentLocalizer(moment);
function Availability() {
	return (
		<div className="availability-calendar-container" style={{ height: 600 }}>
			<Calendar
				localizer={localizer}
				events={[
					{
						title: "N/A ALL DAY",
						allDay: true,
						start: new Date(2020, 6, 10), // 10.00 AM
						end: new Date(2020, 6, 12), // 2.00 PM
					},
					{
						title: "N/A 8AM-4PM	",
						allDay: false,
						start: new Date(2020, 6, 20, 8, 0), // 10.00 AM
						end: new Date(2020, 6, 20, 16, 0), // 2.00 PM
					},
				]}
				startAccessor="start"
				endAccessor="end"
			/>
		</div>
	);
}

export default Availability;
