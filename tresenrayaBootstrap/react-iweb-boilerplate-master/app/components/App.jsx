import React from 'react';
import './../assets/scss/main.scss';
import Cabecera from './Cabecera.jsx';
import Tablero from './Tablero.jsx';
import Reset from './Reset.jsx';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

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
    	<div>
    		<Cabecera texto={texto} contador={turno}/>
    		<Grid>
          <Row>
            <Col sm={12} md={6} className={"center"}>
              <Tablero valores={this.state.valores} appClick={this.appClick}/>
            </Col>
            <Col sm={6} md={6}>
              <Reset resetClick={this.resetClick}/>
            </Col>
          </Row>  
        </Grid>	
    	</div>

    );

  }

}

