import React, { Component } from 'react'
import axios from 'axios'
import {Row, Col, Card} from 'react-bootstrap'

class Current extends Component {
	state = {weatherData: ''}

	async componentDidMount(){
		const {lat, lon, appId} = this.props.data 
		const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`)
		const weatherData = res.data
		this.setState({weatherData})
	}

	degreeFar(C){
		let F = parseInt(9/5 * C + 32)
		return F
	}

	render(){
		const {weather, main, wind, name} = this.state.weatherData

		if(this.state.weatherData.hasOwnProperty('weather')) {
			return (
				<Row className="justify-content-md-center mt-4">
					<Col md="auto">
						<Card bg="dark" text="white" style={{ width: '18rem' }}>
							<Card.Header>Current Weather</Card.Header>
							<Card.Body>
								<Card.Title>weather type: {weather[0].description}</Card.Title>
								<Card.Text>
									Temperature (in &#176;C): {main.temp} &#176;C <br />
									Temperature (in &#176;F): {this.degreeFar(main.temp)} &#176;F <br />
									Humidity : {main.humidity}% <br />
									Wind Speed : {parseFloat(wind.speed * 2.23).toFixed(2)} mph <br />
									Wind Direction: {wind.deg} degrees <br />
									<br/>
									Location: {name}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			)
		} else {
			return (
				<Row className="justify-content-md-center mt-4">
					<Col md="auto">
						<div className="loader">
						</div>
						<p className="mt-4">
							If data is not loading, try visiting hourly forecast.
						</p>
					</Col>
				</Row>
			)
		}
	}
}

export default Current