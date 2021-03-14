import React from 'react';
import Aux from '../../hocs/Aux';
import GraphQLDemo from '../GraphQLDemo/GraphQLDemo';
import ToggleCode from '../ToggleCode/ToggleCode';

export default function RecruiterView(props) {
	const [showCode, setCodeShowing] = React.useState(false);

	const toggleCode = () => {
		setCodeShowing(!showCode);
	};

	return (
		<Aux>
			<h1>Recruiter View</h1>
			<ToggleCode onClick={toggleCode} />
			<GraphQLDemo showCode={showCode} />
		</Aux>
	);
}
