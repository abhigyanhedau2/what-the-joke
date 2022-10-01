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
import { useDispatch, useSelector } from 'react-redux';
import { favJokesActions } from './store/favJokes-slice';

let isInitial = true;

const App = () => {

	const favJokesArr = useSelector(state => state.favJokes.favJokesArr);
	const quantity = useSelector(state => state.favJokes.quantity);

	const dispatch = useDispatch();

	// Fetch favorite items
	useEffect(() => {

		const getFavJokes = async () => {
			const response = await fetch('https://what-the-joke-6ab58-default-rtdb.firebaseio.com/favJokes.json');

			if (!response.ok)
				throw new Error('Fetching Favorite Jokes failed');

			const data = await response.json();

			dispatch(favJokesActions.replaceFavorites({
				favJokesArr: data.favJokesArr,
				quantity: data.quantity
			}))
		};

		try {
			getFavJokes();
		} catch (error) {
			console.log(error);
		}

	}, [dispatch]);

	// Send favorite items whenever they get changed
	useEffect(() => {

		if (isInitial) {
			isInitial = false;
			return;
		}

		const sendFavJokesData = () => {
			fetch('https://what-the-joke-6ab58-default-rtdb.firebaseio.com/favJokes.json', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ favJokesArr, quantity })
			})
		};

		try {
			sendFavJokesData();
		} catch (error) {
			console.log(error);
		}

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