import React from 'react'

import './Footer.scss';

export const Footer: React.FC = () => {
  return (
			<footer className="footer">
				<div className="footer__icon">
					<img src="" alt="" />
				</div>
				<div className="footer__nav">
					<ul>
						<li className="footer__nav-link">Home</li>
						<li className="footer__nav-link">About</li>
						<li className="footer__nav-link">Menu</li>
						<li className="footer__nav-link">Reservations</li>
						<li className="footer__nav-link">Order Online</li>
						<li className="footer__nav-link">Login</li>
					</ul>
				</div>
				<div className="footer__contact">
					<ul>
						<li>Address</li>
						<li>Phone number</li>
						<li>Email</li>
					</ul>
				</div>
				<div className="footer__socials">
					<ul>
						<li>Address</li>
						<li>Phone number</li>
						<li>Email</li>
					</ul>
				</div>
			</footer>
  )
}