import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import  configureStore  from './store';
import createRoutes from './routes';

const initialState = {}
const store = configureStore(initialState);
const routes = createRoutes(store);

ReactDom.render(
	<Provider store={store}>
		<Router>
			{routes}
		</Router>
	</Provider>
	, document.getElementById("root"));

