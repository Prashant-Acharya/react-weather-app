import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


import Current from './Components/Current'
import Daily from './Components/Daily'

// Import API Key
import apikey from './apikey'


const DefaultComponent = () => (
	<h4>Navigate through the navigation menu to find Current weather and forecast</h4>
)


class App extends Component {
	state = {
		lat: '',
		lon: '',
		appId: apikey
	}

	componentDidMount(){
		navigator.geolocation.getCurrentPosition(position => {
			this.setState({
				lat: parseFloat(position.coords.latitude).toFixed(3),
				lon: parseFloat(position.coords.longitude).toFixed(3),
				appId: apikey
			})
		})
	}

	render() {
		console.log(this.state)
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

					{/* <Route exact path="/" render={() => (
						<Redirect to={{
							pathname: "/current",
							state: { data: this.state }
						}} />
					)}/> */}
					<Route exact path="/" render = {DefaultComponent} />
					<Route path="/current/" render = {() => <Current data = {this.state} />} />
					<Route path="/daily/" render = {() => <Daily data = {this.state} />} />
				</Router>
			</Container>
		)
	}
}

export default App