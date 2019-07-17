import React from 'react';

import {TouchableHighlight, Text, StyleSheet} from 'react-native';

const casillaStyle = {
	height: '100px',
	width: '100px',
	backgroundColor: 'red',
	color: 'white'
}

export default class Tablero extends React.Component {
	constructor(props){
		super(props)
		this.casillaClick= this.casillaClick.bind(this);
	}

	casillaClick(){
		if(this.props.valor === "-"){
			this.props.tableroClick(this.props.indiceFila, this.props.indiceColumna);
		}
		
	}

	render(){
		
    	 return(
    	 	<TouchableHighlight style={styles.casilla} onPress={this.casillaClick}  
    	 	disabled={this.props.valor === "-" ? false : true}>
    	 		<Text style={styles.casillaText}> {this.props.valor} </Text> 
    	 	</TouchableHighlight>
    	 );
    
	}
}

const styles = StyleSheet.create({
	casilla:{
		flex:1,
		padding:10,
		alignItems:'center',
		borderWidth:1,
		borderColor:'black',
		backgroundColor:'#eee'
	},
	casillaText:{
		fontSize:60
	}
})