import React, { Component } from 'react'
// import axios from 'axios'

class Daily extends Component {
	state = {
		
	}
	componentDidMount(){
		
	}

	render(){
		return (
			<>
				<h3>Daily Weather Forecast</h3>
				<p>{this.props.data.latitude}, {this.props.data.longitude}</p>
			</>
		)
	}
}

export default Daily