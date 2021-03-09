import React from 'react';

// <----- Components ----->
import Aux from '../hocs/Aux';
import GraphQLDemo from './GraphQLDemo/GraphQLDemo';
import ToggleCode from './ToggleCode/ToggleCode';

// <----- Styling ----->
import '../../App.css';
import './Showcase.css';

export default function Showcase() {
	return (
		<Aux className='App'>
			<h1>Showcase</h1>
			<ToggleCode />
			<GraphQLDemo />
		</Aux>
	);
}
