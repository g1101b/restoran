import React from 'react';
import {Routes, Route} from 'react-router-dom'

import {Header, Footer} from './components'
import {Home, Booking, ConfirmedBooking} from './pages'

import './styles/index.scss'

const App: React.FC = () => {
	return (
		<>
			<Header />
			<main className="home">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/booking' element={<Booking />} />
					<Route path='/confirmed' element={<ConfirmedBooking />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
