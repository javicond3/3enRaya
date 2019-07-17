import React from 'react';
import './../assets/scss/main.scss';
import Casilla from './Casilla.jsx';

export default class Tablero extends React.Component {
	tableroClick(fila,columna){
		this.props.appClick(fila,columna)
	}
	constructor(props){
  		super(props)
  		this.tableroClick = this.tableroClick.bind(this);
  }

	render(){
		let tablero = this.props.valores.map((valoresFila, indiceFila) => {
			let fila = valoresFila.map((valor, indiceColumna) => {
				let mykey = "" + indiceFila + indiceColumna;
				return(<Casilla valor={valor} key = {mykey}
					indiceFila={indiceFila} indiceColumna={indiceColumna}
					tableroClick={this.tableroClick}/>);
			});
			return(<div key = {indiceFila}>{fila}</div>);
		});
		return(
		tablero
		);
	}
}

