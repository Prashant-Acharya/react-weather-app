import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {BrowserRouter as Router, NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
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
		</Router>
	)
}

export default Navigation