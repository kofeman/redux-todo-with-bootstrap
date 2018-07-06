import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import { App } from './containers/index'

import './styles/index.css';
import './index.css'

const target = document.querySelector('#root')

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div className="h-100">
				<App />
			</div>
		</ConnectedRouter>
	</Provider>,
	target
)