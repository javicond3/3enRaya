import {JUGADORX, JUGADOR0, TABLERO} from '../constants/constants';

function gameReducer(state= TABLERO, action){
	switch (action.type){
		case 'JUGAR_POSICION':
			let nuevoValor = action.turno === JUGADORX ? 'X' : '0';
			let newState = JSON.parse(JSON.stringify(state))
			newState[action.x][action.y]=nuevoValor;
			return newState;
		case 'RESET':
			return TABLERO;
		default:
			return state;
	}
}
export default gameReducer;