import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


import Current from './Components/Current'
import Daily from './Components/Daily'

class App extends Component {
	render() {
		return (
			<Container>
				<Router>
					<Navbar bg="dark" variant="dark">
						<Navbar.Brand>
							{' Weather App '}
						</Navbar.Brand>
						<Nav>
							<Nav.Link><NavLink to='/current/'>Get Current Weather</NavLink></Nav.Link>
							<Nav.Link><NavLink to='/daily/'>Daily Forecast</NavLink></Nav.Link>
						</Nav>
					</Navbar>

					<Route path="/" exact component = {Current} />
					<Route path="/current/" component = {Current} />
					<Route path="/daily/" component = {Daily} />
				</Router>
			</Container>
		)
	}
}

export default App
