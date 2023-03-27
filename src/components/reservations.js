import React from 'react';
import '../styles/reservations.css';

function Reservations(props) {
	return (
		<>
			<h1>Reserve A Table</h1>
			<form className="reservation-form">
				<div className="form-container">
					<label htmlFor="fname">First Name:</label>
					<input type="text" id="fname" placeholder="First Name" required/>
					<label htmlFor="lname">Last Name:</label>
					<input type="text" id="lname" placeholder="Last Name" required/>
				</div>
				<div className="form-container">
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" placeholder="Email" required/>
					<label htmlFor="phone">Phone:</label>
					<input type="tel" id="phone" placeholder="(xxx)-xxx-xxxx" required/>
				</div>
				<div className="form-container">
					<label htmlFor="date">Select Date:</label>
					<input type="date" id="date" placeholder="Select Date" required/>
					<label htmlFor="time">Select Time:</label>
					<select id="time" required>
						12:00pm
					</select>
				</div>
				<div className="form-container">
					<label htmlFor="partyCount">No. of People:</label>
					<input type="number" id="partyCount" placeholder="No. of people" required/>
					<label htmlFor="preferences">Seating preferences:</label>
					<select id="preferences">
						<option>None</option>
						<option>Indoors</option>
						<option>Outdoor (Patio)</option>
						<option>Outdoor (Sidewalk)</option>
					</select>
				</div>
				<div className="form-container">
					<label htmlFor="comments">Additional Comments:</label>
					<textarea
						id="comments"
						rows={8}
						cols={50}
						placeholder="Additional Comments"
					></textarea>
				</div>
				<div className="form-container">
					<button type="button">Clear</button>
					<button type="submit">Submit</button>
				</div>
			</form>
		</>
	);
}

export default Reservations;