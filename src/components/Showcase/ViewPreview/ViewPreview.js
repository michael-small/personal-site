import React from 'react';

import Aux from '../../hocs/Aux';
import './ViewShowcase.css';

// <----- MUI ----->
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export default function ViewShowcase(props) {
	return (
		<Aux>
			<div id='body'>
				<div className='center'>
					<Button
						variant='outlined'
						color='primary'
						size='large'
						href={props.link}
					>
						View as {props.role}
						{props.role === 'Recruiter' ? (
							<WorkOutlineIcon />
						) : props.role === 'Developer' ? (
							<DeveloperModeIcon />
						) : props.role === 'Friends and Family' ? (
							<PeopleOutlineIcon />
						) : (
							<HelpOutlineIcon />
						)}
					</Button>
				</div>
				<p>
					{props.description} {props.codeBackgroundReq}
				</p>
				<hr />
			</div>
		</Aux>
	);
}
