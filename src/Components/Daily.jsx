import React, { Component } from 'react'

class Daily extends Component {
	state = {
		message: 'test'
	}
	componentDidMount(){
		this.setState({message: 'Hey'})
	}

	render(){
		return (
			<>
				<h3>Daily Weather Forecast: {this.state.message}</h3>
			</>
		)
	}
}

export default Daily