import React from 'react';
import Cabecera from './Cabecera.js';
import Tablero from './Tablero.js';
import { View } from 'react-native';

const JUGADORX = "jugador 1 - las X"
const JUGADOR0 = "jugador 2 - los 0"

export default class App extends React.Component {
  
  constructor(props){
  	super(props)
  	this.state = {
  		turno: JUGADORX,
  		valores: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
  		contador : 0
  	};
  	this.appClick = this.appClick.bind(this);
  	this.resetClick = this.resetClick.bind(this);
  }

  appClick(fila,columna){
  	let nuevosValores = this.state.valores.slice();
  	let nuevoValor = this.state.turno === JUGADORX ?  "X": "0";
  	nuevosValores[fila][columna] = nuevoValor;
  	this.setState({
	  	turno : nuevoValor === "X" ? JUGADOR0 : JUGADORX,
	  	valores : nuevosValores,
	  	contador : this.state.contador+1
	});
}

	resetClick(){
		let turnoReset = JUGADORX;
		let valoresReset = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
		let contadorReset = 0;
		this.setState({
			turno : turnoReset,
			valores : valoresReset,
			contador : contadorReset
		});
	}
  	

  

  render() {
    let texto = "Turno del " + this.state.turno;
    let turno = "Contador " + this.state.contador;
    return(
    	<View style={{flex:1, margin:10, justifyContent:'center'}}>
    	 <Cabecera texto={texto} contador={turno}/>
    	 <Tablero valores={this.state.valores} appClick={this.appClick}/>
    	</View>

    );

  }

}

