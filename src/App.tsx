import React from 'react';

const App: React.FC = () => {
	return (
		<>
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
			<main className="main">
				<section className="main__hero">
					<div>
						<h1>Little Lemon</h1>
						<h6>Chicago</h6>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo omnis perspiciatis, soluta corporis id voluptatum nihil rem at delectus!</p>
						<a href="" className="main__order-table"></a>
					</div>
					<img src="" alt="" className="main__img" />
				</section>
				<section className="main__highlights">
					<div className="main__header">
						<h3>Spesials</h3>
						<a href="" className="main__menu"></a>
					</div>
					<div className="main__spesials">
						<div className="main__card">
							<img src="" alt="" className="main__card-img" />
							<div className="main__card-header">
								<span>title</span>
								<span>price</span>
							</div>
							<p className="main__card-descriptions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam est repellendus dolores nam reprehenderit perferendis nemo, dolor sunt laborum?</p>
							<a href="" className="main__card-order-btn"></a>
						</div>
					</div>
				</section>
				<section className="testimonials">
					<h3>Testimonials</h3>
					<div className="testimonials__list">
						<div className="testimonials__item">
							<h5>header</h5>
							<img src="" alt="" />
							<span>name</span>
							<p>text</p>
						</div>
					</div>
				</section>
				<section className='about'>
					<h1>Little Lemon</h1>
					<h6>Chicago</h6>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et fugit tempora dolores amet nobis placeat commodi odio expedita magni debitis!</p>
					<img src="" alt="" />
				</section>
			</main>
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
		</>
	);
}

export default App;
