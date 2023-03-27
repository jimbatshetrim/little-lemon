import React, {useState} from 'react';
import '../styles/reservations.css';
import {submitAPI} from '../api/bookingApi';
import {useNavigate} from 'react-router-dom';

function Reservations({availableTimes, dispatch}) {
	const [fname, setFName] = useState('');
	const [lname, setLName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [people, setPeople] = useState(1);
	const [preference, setPreference] = useState('');
	const [comments, setComments] = useState('');
	const navigation = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const submitted = submitAPI({fname, lname, email, phone, date, time, people, preference, comments})
		submitted && navigation('/confirmationPage')
	}

	return (
		<>
			<h1>Reserve A Table</h1>
			<form className="reservation-form" onSubmit={handleSubmit}>
				<div className="form-container">
					<label htmlFor="fname">First Name:</label>
					<input
						value={fname}
						onChange={({target: {value}}) => setFName(value)}
						type="text" id="fname" placeholder="First Name" required/>
					<label htmlFor="lname">Last Name:</label>
					<input
						value={lname}
						onChange={(e) => setLName(e.target.value)}
						type="text" id="lname" placeholder="Last Name" required/>
				</div>
				<div className="form-container">
					<label htmlFor="email">Email:</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email" id="email" placeholder="Email" required/>
					<label htmlFor="phone">Phone:</label>
					<input
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						type="tel" id="phone" placeholder="(xxx)-xxx-xxxx" required/>
				</div>
				<div className="form-container">
					<label htmlFor="date">Select Date:</label>
					<input
						value={date}
						onChange={({target: {value}}) =>  {
							setDate(value);
							dispatch({day: value})
						}}
						type="date" id="date" placeholder="Select Date" required/>
					<label htmlFor="time">Select Time:</label>
					<select
						value={time}
						onChange={(e) => setTime(e.target.value)}
						id="time" required>
						{
							availableTimes?.map(time => <option key={time}>{time}</option>)
						}
					</select>
				</div>
				<div className="form-container">
					<label htmlFor="partyCount">No. of People:</label>
					<input
						value={people}
						type="number"
						onChange={(e) => setPeople(+e.target.value)}
						id="partyCount" placeholder="No. of people" required/>
					<label htmlFor="preferences">Seating preferences:</label>
					<select
						value={preference}
						onChange={(e) => setPreference(e.target.value)}
						id="preferences">
						<option>None</option>
						<option>Indoors</option>
						<option>Outdoor (Patio)</option>
						<option>Outdoor (Sidewalk)</option>
					</select>
				</div>
				<div className="form-container">
					<label htmlFor="comments">Additional Comments:</label>
					<textarea
						value={comments}
						onChange={e => setComments(e.target.value)}
						id="comments"
						rows={8}
						cols={50}
						placeholder="Additional Comments"
					></textarea>
				</div>
				<div className="form-container">
					<small>
						<p>
							Note: You cannot edit your reservation after submission. Please
							double-check your answer before submitting your reservation request.
						</p>
					</small>
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