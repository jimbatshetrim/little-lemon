import React from 'react';
import {useNavigate} from 'react-router-dom';

const ConfirmedBooking = () => {
	const navigate = useNavigate();
	function navigateHome(link) {
		navigate(link);
	}
	return (
		<div className='confirmation'>
			<h1>Your booking is confirmed.</h1>
			<div className='navigation-button'>
				<button onClick={() => navigateHome('/reservations')}>
					Reserve a table
				</button>
				<button onClick={() => navigateHome('/')}>
					Home
				</button>
			</div>
		</div>
	);
};

export default ConfirmedBooking;