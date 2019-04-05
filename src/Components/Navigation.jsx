import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				{' Weather App '}
			</Navbar.Brand>
			<Nav>
				<Nav.Link><NavLink to='/current/'>Get Current Weather</NavLink></Nav.Link>
				<Nav.Link><NavLink to='/daily/'>Daily Forecast</NavLink></Nav.Link>
			</Nav>
		</Navbar>
	)
}

export default Navigation