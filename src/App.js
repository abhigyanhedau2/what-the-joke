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

	useEffect(() => {
		console.log(favJokesArr);
	}, [favJokesArr]);

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