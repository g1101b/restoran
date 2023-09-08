import React from 'react'
import {Link} from 'react-router-dom'

import './Header.scss';


export const Header: React.FC = () => {
  	return (
		<header className='header'>
			<div className="container">
				<nav className='header__nav'>
					<h3>Little Lemon</h3>
					<ul className='header__links'>
						<li className="header__link"><Link to="/" >Home</Link></li>
						<li className="header__link">About</li>
						<li className="header__link">Menu</li>
						<li className="header__link"><Link to="/booking">Reservations</Link></li>
						<li className="header__link">Order Online</li>
						<li className="header__link">Login</li>
					</ul>
				</nav>
			</div>
		</header>
  	)
}
