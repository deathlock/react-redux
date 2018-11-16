import React, { Component } from 'react';
import { connect } from 'react-redux';
import { appGetData as appAction } from '../actions/app/app.async.action';

class App extends Component {
	componentDidMount(){
		this.props.dispatch(appAction());
	}
	
	render() {
		console.log(this.props.appReducer.data)
		return (
				<div className="App">
						<h1>hi</h1>
						<ul>
							{
								this.props.appReducer.data.map(function(data){
									return <li key={data.ID}>{data.Name}</li>
								})
							}
						</ul>
				</div>
			);
	}
}

const select = store => store;
export default connect(select)(App);
