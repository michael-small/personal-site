import React from 'react';
import Aux from '../../hocs/Aux';

// toggle button/forms
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function ToggleCode() {
	const [state, setState] = React.useState({
		checked: false,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<Aux>
			<FormGroup row>
				<FormControlLabel
					control={
						<Switch
							checked={state.checked}
							onChange={handleChange}
							name='checked'
						/>
					}
					label={state.checked ? 'Show Code' : "Don't Show Code"}
				></FormControlLabel>
			</FormGroup>
			<h2>ToggleCode</h2>
		</Aux>
	);
}
