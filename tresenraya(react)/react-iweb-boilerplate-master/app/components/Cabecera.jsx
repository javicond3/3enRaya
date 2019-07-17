import React from 'react';
import './../assets/scss/main.scss';



export default class Cabecera extends React.Component {


	render(){
		return(
			<div>
				<h1 className ="cabecera">{this.props.texto}</h1>
				<h2 className ="cabecera">{this.props.contador}</h2>
			</div>
		);
	}
} 