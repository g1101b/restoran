import React from 'react'

import './Header.scss';

export const Header = () => {
  	return (
		<header className='header'>
			<h1 className='Header__logo'>
				logo
			</h1>
			<nav className='header__nav'>
				<ul className='header__links'>
					<li className="header__link">Home</li>
					<li className="header__link">About</li>
					<li className="header__link">Menu</li>
					<li className="header__link">Reservations</li>
					<li className="header__link">Order Online</li>
					<li className="header__link">Login</li>
				</ul>
			</nav>
		</header>
  	)
}
