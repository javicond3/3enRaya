import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import turnoReducer from './turnoReducer';
import contadorReducer from './contadorReducer';

const GlobalState = combineReducers({
	turno : turnoReducer,
	tablero : gameReducer,
	contador : contadorReducer
});

export default GlobalState;