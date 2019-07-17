export function jugarPosicion(x, y, turno){
	return {
		type : 'JUGAR_POSICION',
		x : x,
		y : y,
		turno : turno
	}
}

export function reset(){
	return {
		type : 'RESET'
	}
}