import React from 'react'

import './Header.scss';

// import logo from '../../assets/logo.svg';

export const Header = () => {
  	return (
		<header className='header'>
			<div className="container">
				<nav className='header__nav'>
					<h3>Little Lemon</h3>
					<ul className='header__links'>
						<li className="header__link">Home</li>
						<li className="header__link">About</li>
						<li className="header__link">Menu</li>
						<li className="header__link">Reservations</li>
						<li className="header__link">Order Online</li>
						<li className="header__link">Login</li>
					</ul>
				</nav>
			</div>
		</header>
  	)
}
