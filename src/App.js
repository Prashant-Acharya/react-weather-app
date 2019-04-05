import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Navigation from './Components/Navigation'
import Current from './Components/Current'
import Daily from './Components/Daily'

class App extends Component {
	render() {
		return (
			<Container>
				<Router>
					<Navigation />
					<Current />
					<Daily />


					<Route path="/" exact component = {Current} />
					<Route path="/current/" component = {Current} />
					<Route path="/daily/" component = {Daily} />
				</Router>
			</Container>
		)
	}
}

export default App
