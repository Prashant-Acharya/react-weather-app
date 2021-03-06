import React, { Component } from 'react'
import axios from 'axios'
import {Row, Col, Card} from 'react-bootstrap'


class Daily extends Component {
	state = {
		weatherData: ''
	}
	componentDidMount(){
		
	}

	render(){
		if(this.state.weatherData.hasOwnProperty('weather')) {
			return (
				<Row className="justify-content-md-center mt-4">
					<Col md="auto">
						{/* <Card bg="dark" text="white" style={{ width: '18rem' }}>
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
						</Card> */}
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
							If data is not loading, try looking Current weather information.
						</p>
					</Col>
				</Row>
			)
		}
	}
}

export default Daily