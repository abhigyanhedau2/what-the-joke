import React, { useEffect } from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Favorites from './components/Favourites/Favorites';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import { useSelector } from 'react-redux';

const App = () => {

	const favJokesArr = useSelector(state => state.favJokes.favJokesArr);
	const quantity = useSelector(state => state.favJokes.quantity);

	useEffect(() => {

		const sendCartData = () => {
			fetch('https://what-the-joke-6ab58-default-rtdb.firebaseio.com/favJokes.json', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ favJokesArr, quantity })
			})
		};

		sendCartData();

	}, [favJokesArr, quantity]);

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/favorites" element={<Favorites />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
};

export default App;