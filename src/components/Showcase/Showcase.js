import React, { Component } from 'react';
import '../../App.css';
import Aux from '../hocs/Aux';
import GraphQLDemo from './GraphQLDemo/GraphQLDemo';
import ToggleCode from './ToggleCode/ToggleCode';

export default class Showcase extends Component {
	render() {
		return (
			<Aux className='App'>
				<h1>Showcase</h1>
				<ToggleCode />
				<GraphQLDemo />
			</Aux>
		);
	}
}
