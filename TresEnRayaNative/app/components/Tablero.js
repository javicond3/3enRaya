import React from 'react';
import Casilla from './Casilla.js';
import { View, StyleSheet} from 'react-native';

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
				return(<Casilla valor={valor} key={mykey}
					indiceFila={indiceFila} indiceColumna={indiceColumna}
					tableroClick={this.tableroClick}/>);
			});
			return(<View style={styles.boardRow} key = {indiceFila}>{fila}</View>);
		});
		return(
			<View style={styles.board}>{tablero}</View>
		);
	}
}

const styles = StyleSheet.create({
	board:{
		flex:1,
		flexDirection:'column',
		justifyContent: 'space-between'
	},
	boardRow:{
		flex:1,
		flexDirection:'row',
		justifyContent:'space-between'
	}
})



