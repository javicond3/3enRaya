import React from 'react';
import './../assets/scss/main.scss';
import {Panel} from 'react-bootstrap';


export default class Cabecera extends React.Component {


	render(){
		return(
			<div>
				<Panel header={this.props.texto} bsStyle="info">{this.props.contador}</Panel>
				
			</div>
		);
	}
} 