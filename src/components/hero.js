import React from 'react';
import heroImg from './../assets/restauranfood.jpg';

function Hero() {
	return (
		<section className="Hero-section">
			<div className="description">
				<h1>Little Lemon</h1>
				<h4>Chicago</h4>
				<p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
				<button className="reserve-btn br">Reserve a Table</button>
			</div>
			<img src={heroImg} className="br hero-img" alt="hero"/>
		</section>
	);
}

export default Hero;