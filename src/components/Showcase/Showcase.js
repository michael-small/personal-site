import React, { Component } from 'react';

// <----- Components ----->
import Aux from '../hocs/Aux';
import GraphQLDemo from './GraphQLDemo/GraphQLDemo';
import ToggleCode from './ToggleCode/ToggleCode';

// <----- Styling ----->
import '../../App.css';
import './Showcase.css';
import ViewShowcase from './ViewPreview/ViewPreview';

export default class Showcase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showCode: false,
		};
	}

	toggleCode = () => {
		let showCode = this.state.showCode;
		this.setState({ showCode: !showCode }, () => {
			// `setState` is async, and I'm keeping this in
			//as a reminder of how to run things in sync
			// console.log(this.state.showCode);
		});
	};

	render() {
		return (
			<Aux className='App'>
				<h1>Showcase</h1>
				<ToggleCode onClick={this.toggleCode} />
				<ViewShowcase
					role='Recruiter'
					description='A streamlined overview of some features I want to showcase.'
					codeBackgroundReq='No hands-on programming experience required.'
				/>
				<GraphQLDemo showCode={this.state.showCode} />
			</Aux>
		);
	}
}
