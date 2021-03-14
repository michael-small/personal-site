import React from 'react';

import Aux from '../../hocs/Aux';
import './ViewShowcase.css';

// <----- MUI ----->
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function ViewShowcase(props) {
	return (
		<Aux>
			<div id='body'>
				<h1 className='view-title'>{props.role} View</h1>

				<p>{props.description}</p>
				<p>{props.codeBackgroundReq}</p>
				<div className='center'>
					<Link to={props.link}>
						<Button variant='outlined' color='primary'>
							View as {props.role}
						</Button>
					</Link>
				</div>
				<hr />
			</div>
		</Aux>
	);
}
