import React from 'react';
import footerLogo from './../assets/footer-logo.png'
import {NAVIGATION} from '../misc/constant';
import {Link} from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<img src={footerLogo} alt="logo"/>
			<div className="navigation">
				<h3>Navigation</h3>
				{
					NAVIGATION.map(
						menu => <p key={menu.id}><Link to={menu.link}>{menu.label}</Link></p>
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