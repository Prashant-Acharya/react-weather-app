import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


import Current from './Components/Current'
import Daily from './Components/Daily'

// Import API Key
import apikey from './apikey'


class App extends Component {
	state = {
		lat: '',
		lon: '',
		appId: apikey
	}

	componentDidMount(){
		navigator.geolocation.getCurrentPosition(position => {
			this.setState({
				lat: parseInt(position.coords.latitude),
				lon: parseInt(position.coords.longitude)
			})
		})
	}

	render() {
		return (
			<Container>
				
				<Router>
					<Navbar bg="dark" variant="dark">
						<Navbar.Brand>
							{' Weather App '}
						</Navbar.Brand>
						<Nav>
							<NavLink className = "nav-link" to='/current/'>Get Current Weather</NavLink>
							<NavLink className = "nav-link" to='/daily/'>Daily Forecast</NavLink>
						</Nav>
					</Navbar>

					<Route exact path="/" render={() => (
						<Redirect to="/current"/>
					)}/>
					<Route path="/current/" render = {() => <Current data = {this.state} />} />
					<Route path="/daily/" render = {() => <Daily data = {this.state} />} />
				</Router>


				{/* <p>
					Latitude: {this.state.latitude} <br />
					Longitude: {this.state.longitude}
				</p> */}
			</Container>
		)
	}
}

export default App