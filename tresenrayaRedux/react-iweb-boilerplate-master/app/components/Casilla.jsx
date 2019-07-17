import React from 'react';
import './../assets/scss/main.scss';


const casillaStyle = {
	height: '100px',
	width: '100px',
	backgroundColor: 'red',
	color: 'white'
}

export default class Tablero extends React.Component {
	constructor(props){
		super(props)
		//el bind se pone cuando un metodo usa dentro this.
		this.casillaClick= this.casillaClick.bind(this);
	}

	casillaClick(){
		if(this.props.valor === "-"){
			this.props.tableroClick(this.props.indiceFila, this.props.indiceColumna);
		}
		
	}

	render(){
		
    	 return(
    	 	<button onClick={this.casillaClick} key={this.props.key} style={casillaStyle} 
    	 	className={this.props.valor === "-" ? "clickable" : "no_clickable"}>{this.props.valor} 
    	 	</button>
    	 );
    
	}
}