import React from 'react';
import {Routes, Route} from 'react-router-dom'

import {Header, Footer} from './components'
import {Home, Booking} from './pages'

import './styles/index.scss'

const App: React.FC = () => {
	const [availableTimes, setAvailableTimes] = React.useState<string[]>([]);

	return (
		<>
			<Header />
			<main className="home">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/booking' element={<Booking times={availableTimes} changeTimes={setAvailableTimes} />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
