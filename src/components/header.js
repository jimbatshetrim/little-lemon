import React from 'react';
import logo from './../assets/Logo.svg';
import {Link} from 'react-router-dom';
import {NAVIGATION} from '../misc/constant';

function Header() {
	return (
		<header>
			<img src={logo} alt="logo"/>
			<nav>
				<ul>
					{
						NAVIGATION.map(
							menu => <li key={menu.id}><Link to={menu.link}>{menu.label}</Link></li>
						)
					}
				</ul>
			</nav>
		</header>
	)
}

export default Header;