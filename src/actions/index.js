import axios from 'axios';
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const FETCH_CHAR_START = 'FETCH_CHAR_START';
export const FETCH_CHAR_SUCCESS = 'FETCH_CHAR_SUCCESS';
export const FETCH_CHAR_FAIL = 'FETCH_CHAR_FAIL';

export const fetchCharSuccess = characters => {
	return {
		type: FETCH_CHAR_SUCCESS,
		characters: characters
	};
};

export const fetchCharFail = error => {
	return {
		type: FETCH_CHAR_FAIL,
		error: error
	};
};

export const fetchCharStart = error => {
	return {
		type: FETCH_CHAR_START
	};
};

export const fetchCharacters = () => {
	return dispatch => {
		dispatch(fetchCharStart());
		axios
			.get(`https://swapi.co/api/people/`)
			.then(res => {
				const fetchedChar = [];
				for (let key in res.data) {
					fetchedChar.push({
						...res.data[key],
						id: key
					});
				}
				dispatch(fetchCharSuccess(fetchedChar));
			})
			.catch(err => {
				dispatch(fetchCharFail(err));
			});
	};
};
