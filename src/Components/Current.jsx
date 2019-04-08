import React, { Component } from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'

class Current extends Component {
	state = {weatherData: ''}

	async componentDidMount(){
		const {lat, lon, appId} = this.props.data 
		const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`)
		const weatherData = res.data
		this.setState({weatherData})
	}

	render(){
		return (
			<>
				<Row className="justify-content-md-center mt-4">
					<Col md="auto">Variable width content</Col>
				</Row>
			</>
		)
	}
}

export default Current