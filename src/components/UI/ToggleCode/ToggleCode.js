import React from 'react';

// <----- MUI ----->
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// MUI: toggle button/forms
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
	root: {
		textAlign: 'center',
	},
});

export default function ToggleCode({ onClick }) {
	const classes = useStyles();

	const [state, setState] = React.useState({
		checked: false,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<Container classes={{ root: classes.root }}>
			<FormGroup row>
				<Container>
					<FormControlLabel
						control={
							<Switch
								checked={state.checked}
								onClick={onClick}
								onChange={handleChange}
								name='checked'
							/>
						}
						label={state.checked ? 'Show Code' : "Don't Show Code"}
					></FormControlLabel>
				</Container>
			</FormGroup>
		</Container>
	);
}
