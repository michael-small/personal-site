import React from 'react';

import Aux from '../../hocs/Aux';
import './ViewShowcase.css';

// <----- MUI ----->
import Button from '@material-ui/core/Button';

export default function ViewShowcase(props) {
	return (
		<Aux>
			<div id='body'>
				<h1 className='view-title'>ROLE View</h1>
				<div className='center'>
					<Button variant='outlined' color='primary'>
						View as ROLE
					</Button>
				</div>
				<p>
					A ROLE BASED QUALIFIER of some features I want to showcase.
				</p>
				<p>EXPERIENCE NEEDED SNIPPET</p>
			</div>
		</Aux>
	);
}
