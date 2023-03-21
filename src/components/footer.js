import React from 'react';
import footerLogo from './../assets/footer-logo.png'

function Footer() {
	return (
		<footer>
			<img src={footerLogo} alt="logo"/>
			<div className="navigation">
				<h3>Navigation</h3>
				{
					['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'].map(
						menu => <p>{menu}</p>
					)
				}
			</div>
			<div className="contact">
				<h3>Contact</h3>
				<p>3241 Maldova Way</p>
				<p>Chicago Illinois</p>
				<p>(123)-312-3133</p>
				<p>info@littlelemon.com</p>
			</div>
			<div className="socials">
				<h3>Connect</h3>
				<p>Facebook</p>
				<p>Twitter</p>
				<p>Instagram</p>
			</div>
		</footer>
	);
}

export default Footer;