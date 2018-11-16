import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import App from './components/App';

export default () => (
	<Switch>
		<Route path='/' component={App} />
		<Redirect to="/" />
	</Switch>
	);
