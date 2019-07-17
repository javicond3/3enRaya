import React from 'react';
import './../assets/scss/main.scss';
import Cabecera from './Cabecera.jsx';
import Tablero from './Tablero.jsx';
import Reset from './Reset.jsx';
import { connect } from 'react-redux';
import { jugarPosicion, reset } from './../reducers/actions';
import { JUGADORX, JUGADOR0, TABLERO } from '../constants/constants';


class App extends React.Component {
  
  constructor(props){
  	super(props)
  	this.appClick = this.appClick.bind(this);
  	this.resetClick = this.resetClick.bind(this);
  }

  appClick(fila,columna){
  	this.props.dispatch(jugarPosicion(fila, columna, this.props.turno));
}

	resetClick(){
		this.props.dispatch(reset()); 
	}
  	

  

  render() {
    let texto = "Turno del " + this.props.turno;
    let turno = "Contador " + this.props.contador;
    return(
    	<div>
    		<Cabecera texto={texto} contador={turno}/>
    		<Tablero valores={this.props.tablero} appClick={this.appClick}/>
    		<br/> 
			<Reset resetClick={this.resetClick}/>
    	</div>

    );

  }
}

function mapStateToProps(state) {
    return {
      contador : state.contador,
      tablero : state.tablero,
      turno : state.turno
    };
  }

export default connect(mapStateToProps)(App);

