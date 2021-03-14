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
						size='medium'
						href={props.link}
						disabled={props.role === 'Recruiter' ? false : true}
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
					<b>Audience: </b>
					{props.description}
				</p>
				<p>
					<b>Code Background: </b>
					{props.codeBackgroundReq}
				</p>
			</div>
		</Aux>
	);
}
