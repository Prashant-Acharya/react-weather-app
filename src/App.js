import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


import Current from './Components/Current'
import Daily from './Components/Daily'

class App extends Component {
	state = {
		latitude: '',
		longitude: ''
	}

	componentDidMount(){
		navigator.geolocation.getCurrentPosition(position => {
			this.setState({
				latitude: parseInt(position.coords.latitude),
				longitude: parseInt(position.coords.longitude)
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
					<Route path="/current/" component = {Current} />
					<Route path="/daily/" component = {Daily} />
				</Router>


				<p>
					Latitude: {this.state.latitude} <br />
					Longitude: {this.state.longitude}
				</p>
			</Container>
		)
	}
}

export default App