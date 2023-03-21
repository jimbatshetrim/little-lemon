import React from 'react';
import logo from './../assets/Logo.svg';

function Header() {
	return (
		<header>
			<img src={logo} alt="logo"/>
			<nav>
				<ul>
					{
						['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'].map(
							menu => <li>{menu}</li>
						)
					}
				</ul>
			</nav>
		</header>
	)
}

export default Header;