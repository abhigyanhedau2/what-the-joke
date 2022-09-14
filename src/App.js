import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Favorites from './components/Favourites/Favorites';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/favorites" element={<Favorites />} />
			</Routes>
		</BrowserRouter>
	)
};

export default App;