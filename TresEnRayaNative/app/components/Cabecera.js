import React from 'react';

import { Text, StyleSheet } from 'react-native';



export default class Cabecera extends React.Component {


	render(){
		return(
			
			<Text style={styles.cabecera} >{this.props.texto}</Text>
			
		);
	}
}

const styles = StyleSheet.create({
	cabecera:{
		textAlign:'center',
		fontSize: 25,
		padding: 10
	}	
}) 