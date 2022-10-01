import { createSlice } from "@reduxjs/toolkit";

const favJokesSlice = createSlice({
    name: 'favJokes',
    initialState: { favJokesArr: [], quantity: 0 },
    reducers: {
        replaceFavorites(state, action) {

            state.favJokesArr = action.payload.favJokesArr;
            state.quantity = action.payload.quantity;

        },
        addJokeToFavorites(state, action) {

            const newJokeId = action.payload.id;

            const jokeExists = state.favJokesArr.includes(newJokeId);

            if (!jokeExists) {
                state.favJokesArr.push(newJokeId);
                state.quantity++;
            }
        },

        removeJokeFromFavorites(state, action) {

            const jokeId = action.payload.id;

            state.favJokesArr = state.favJokesArr.filter(item => item !== jokeId);

            state.quantity--;
        }
    }
})

export const favJokesActions = favJokesSlice.actions;

export default favJokesSlice.reducer;