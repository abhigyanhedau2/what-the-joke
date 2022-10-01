import { configureStore } from "@reduxjs/toolkit";
import favJokesReducer from './favJokes-slice';

const store = configureStore({
    reducer: {
        favJokes: favJokesReducer
    }
})

export default store;