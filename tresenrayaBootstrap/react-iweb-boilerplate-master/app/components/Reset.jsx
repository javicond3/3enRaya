import React from 'react';
import './../assets/scss/main.scss';
import { Button } from 'react-bootstrap';


export default class Reset extends React.Component {
	constructor(props){
  		super(props)
  		this.resetClick = this.resetClick.bind(this);
    }
	resetClick(){
		this.props.resetClick()
	}

	render(){
		return(
			<div>
				<Button bsStyle="danger" onClick={this.resetClick}>Reset</Button>
				
			</div>
		);
	}
} 