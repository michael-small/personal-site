import React from 'react';
import Aux from '../../hocs/Aux';
import GraphQLDemo from '../GraphQLDemo/GraphQLDemo';
import ToggleCode from '../../UI/ToggleCode/ToggleCode';
import './RecruiterView.scss';

export default function RecruiterView(props) {
	const [showCode, setCodeShowing] = React.useState(false);

	const toggleCode = () => {
		setCodeShowing(!showCode);
	};

	return (
		<Aux>
			{' '}
			<h1>Demos for Recruiters</h1>
			{/* TODO: This will still newline on small enough screens. MUI Icons are unduely awful to inline */}
			<ToggleCode onClick={toggleCode} />
			<GraphQLDemo showCode={showCode} />
		</Aux>
	);
}
