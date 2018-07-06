import React from 'react';
import {Route, Link} from 'react-router-dom'
import Home from './home'
import About from './about'
import ContactUs from './contact'

export const App = () => (
	<div className="text-center h-100">
		<div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
			
			<header className="masthead mb-auto row">
				<div className="inner col-xs-8 w-100">
					<nav className="nav nav-masthead justify-content-center list-inline">
						<Link to="/" className="list-inline-item">Home</Link>
						<Link to="/about-us" className="list-inline-item">About</Link>
						<Link to="/contact-us" className="list-inline-item">Contact us</Link>
					</nav>
				</div>
			</header>
			
			<main role="main" className="row cover d-flex justify-content-center">
				<div className="col-sm-8 col-xs-12">
					<Route exact path="/" component={Home}/>
					<Route exact path="/about-us" component={About}/>
					<Route exact path="/contact-us" component={ContactUs}/>
				</div>
			</main>
			
			<footer className="mastfoot mt-auto">
				<div className="inner">
					<p>Lendos, 2018</p>
				</div>
			</footer>
		</div>
	</div>
)