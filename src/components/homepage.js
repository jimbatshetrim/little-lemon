import React from 'react';
import Hero from './hero';
import Highlights from './highlights';
import CompanyInfo from './companyInfo';

function Homepage() {
	return (
		<div className="App">
			<Hero/>
			<Highlights/>
			<CompanyInfo/>
		</div>
	);
}

export default Homepage;