import React from 'react';
import './../assets/scss/main.scss';



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
				<button onClick={this.resetClick}>Reset</button>
				
			</div>
		);
	}
} 