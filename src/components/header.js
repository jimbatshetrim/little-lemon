import React from 'react';
import logo from './../assets/Logo.svg';
import {Link} from 'react-router-dom';

function Header() {
	return (
		<header>
			<img src={logo} alt="logo"/>
			<nav>
				<ul>
					{
						['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'].map(
							menu => <li><Link to={'/reservations'}>{menu}</Link></li>
						)
					}
				</ul>
			</nav>
		</header>
	)
}

export default Header;