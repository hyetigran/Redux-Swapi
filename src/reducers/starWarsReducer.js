import * as actionTypes from '../actions';

const initialState = {
	characters: [],
	loading: false,
	error: null
	// Array characters, Boolean fetching, null error.
};

const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	};
};

const fetchCharStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const fetchCharSuccess = (state, action) => {
	return updateObject(state, { characters: action.characters, loading: false });
};
const fetchCharFail = (state, action) => {
	return updateObject(state, { loading: false });
};

export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		// Fill me in with the important reducers
		// action types should be FETCHING, SUCCESS and FAILURE
		// your switch statement should handle all of these cases.
		case actionTypes.FETCH_CHAR_START:
			return fetchCharStart(state, action);
		case actionTypes.FETCH_CHAR_SUCCESS:
			return fetchCharSuccess(state, action);
		case actionTypes.FETCH_CHAR_FAIL:
			return fetchCharFail(state, action);
		default:
			return state;
	}
};
