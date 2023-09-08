import React from 'react';
import {Routes, Route} from 'react-router-dom'

import {Header, Footer} from './components'
import {Home, Booking} from './pages'

import './styles/index.scss'

const initializeTimes  = () => {
	return [
		'17:00',
		'18:00',
		'19:00',
		'20:00',
		'21:00',
	]
}

const updateTimes = (state, action) => {
}

const App: React.FC = () => {
	const [times, dispatch] = React.useReducer(updateTimes, initializeTimes());

	const [availableTimes, setAvailableTimes] = React.useState<string[]>(updateTimes());


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
