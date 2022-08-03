import {ADD_SERIES, ADD_WORK, REMOVE_WORK, TOGGLE_CHECK, UPDATE_WORK, UPDATE_WORKS} from './action';
import {Action, State} from '../interface/type';
import Immutable from 'immutable';


const initialState = Immutable.Map({});

export function worksReducer(state = initialState, {type, payload}:Action):State {
	switch (type) {
		case ADD_WORK:
			return state.set(payload.id, Immutable.fromJS(payload.value));
		case UPDATE_WORKS:
			return Immutable.fromJS(payload);
		case REMOVE_WORK:
			return state.delete(payload);
		case UPDATE_WORK:
			return state.set(payload.id, Immutable.fromJS(payload.value));
		case TOGGLE_CHECK:
			return state.setIn([payload, 'checked'], !state.getIn([payload.id, 'checked']));
		default:
			return state;
	}
}

export function seriesReducer(state = initialState, {type, payload}:Action):State {
	switch (type) {
		case ADD_SERIES:
			return state.set(payload.id, Immutable.fromJS(payload.value));
		default:
			return state;
	}
}
