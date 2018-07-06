import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const Home = props => (
	<div>
		
		<h1 className="cover-heading">Cover your page.</h1>
		<p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit
			the text, and add your own fullscreen background photo to make it your own.</p>
		<p className="lead">
			<button className="btn btn-lg btn-secondary" onClick={() => props.changePage()}>Learn more</button>
		</p>
	</div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
	changePage: () => push('/about-us')
}, dispatch)

export default connect(
	null,
	mapDispatchToProps
)(Home)