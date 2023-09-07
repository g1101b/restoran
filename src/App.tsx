import React from 'react';
import {Routes, Route} from 'react-router-dom'

import {Header, Footer} from './components'
import {Home, Booking} from './pages'

import './styles/index.scss'

const App: React.FC = () => {
	return (
		<>
			<Header />
			<main className="home">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/booking' element={<Booking />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
