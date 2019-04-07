import React, { Component } from 'react'
import axios from 'axios'

class Current extends Component {
	state = {weatherData: ''}

	componentDidMount(){
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(data => console.log(data))
	}

	render(){
		return (
			<>
				<h3>Current Weather Info</h3>
				<p>{this.props.data.lat}, {this.props.data.lon}</p>
			</>
		)
	}
}

export default Current