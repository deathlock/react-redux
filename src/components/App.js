import React, { Component } from 'react';
import { connect } from 'react-redux';
import { appGetData as appAction } from '../actions/app/app.async.action';
import { showLoader } from '../actions/loader/loader.sync.action';

import Loader from './common/loader';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(showLoader(true));
		this.props.dispatch(appAction()).then( () => {
				this.props.dispatch(showLoader(false))
		}			
		);
	}
	
	render() {
		const { appReducer: {data}, loaderReducer: {isLoading} } = this.props;
		if(isLoading){
			return <Loader />;
		}
		return (
				<div className="App">
					<a href="/loader">Go to loader</a>
						<h1>hi</h1>
						<ul>
							{
								data.map(function(data){
									return <li key={data.ID}>{data.Name}</li>
								})
							}
						</ul>
				</div>
			);
	}
}

const select = state => state;
export default connect(select)(App);
