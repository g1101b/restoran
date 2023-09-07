import React from 'react';

import {Header, Footer} from './components'
import {Home} from './pages'

const App: React.FC = () => {
	return (
		<>
			<Header />
			<main className="home">
				<Home />
			</main>
			<Footer />
		</>
	);
}

export default App;
