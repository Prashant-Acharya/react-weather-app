import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


import Current from './Components/Current'
import Daily from './Components/Daily'

class App extends Component {
	componentDidMount(){
		console.log("App Component mounted")
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
							<Nav.Link><NavLink to='/current/'>Get Current Weather</NavLink></Nav.Link>
							<Nav.Link><NavLink to='/daily/'>Daily Forecast</NavLink></Nav.Link>
						</Nav>
					</Navbar>

					<Route exact path="/" render={() => (
						<Redirect to="/current"/>
					)}/>
					<Route path="/current/" component = {Current} />
					<Route path="/daily/" component = {Daily} />
				</Router>
			</Container>
		)
	}
}

export default App
