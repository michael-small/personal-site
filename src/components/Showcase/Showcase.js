import React, { Component } from 'react';

// <----- Components ----->
import Aux from '../hocs/Aux';
import GraphQLDemo from './GraphQLDemo/GraphQLDemo';
import ToggleCode from './ToggleCode/ToggleCode';

// <----- Styling ----->
import '../../App.scss';
import './Showcase.scss';
import ViewPreview from './ViewPreview/ViewPreview';

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
				{/* <ToggleCode onClick={this.toggleCode} /> */}
				<h3 style={{ textAlign: 'center' }}>
					Developer and Friends/Family Section coming soon
				</h3>
				<ViewPreview
					role='Recruiter'
					description='A streamlined overview of some features I want to showcase. If you have hands-on coding experience, consider checking out the developer view.'
					codeBackgroundReq='No hands-on programming experience required.'
					link='/showcase/recruiter'
				/>
				<ViewPreview
					role='Developer'
					description='An in depth walkthrough of features and accompanying explanation of code. Recruiters with hands-on coding experience may want to check this out.'
					codeBackgroundReq='Web development. Knowledge of React is preferable.'
					link='/Showcase'
				/>
				<ViewPreview
					role='Friends and Family'
					description='The simplest overview of the demos. My grandma should be able to understand them <3'
					codeBackgroundReq='No coding background required.'
					link='/Showcase'
				/>
				{/* <GraphQLDemo showCode={this.state.showCode} /> */}
			</Aux>
		);
	}
}
