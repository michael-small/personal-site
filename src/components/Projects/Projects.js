import React from 'react';
import theme from '../UI/_theme.scss';
import Aux from '../hocs/Aux';
import Typography from '@material-ui/core/Typography';

export default function Projects() {
	return (
		<Aux>
			<Typography variant='h1' className={theme.center}>
				Projects
			</Typography>
			{/* TODO: Import from home/projects */}
			<div>
				<Typography variant='h3' gutterBottom>
					🧺 Garlicky Bohemian Farm 🚜
				</Typography>
				<Typography variant='body1'>
					A blog and produce showcase for the Garlicky Bohemian Farm,
					a hobby farm that produces thousands of garlic bulbs per
					season.
				</Typography>
			</div>
			<div>
				<Typography variant='h3' gutterBottom>
					🏠 Ed's Garage Sale 🛍️
				</Typography>
				<Typography variant='body1'>
					For the rapid pricing and selling of a large collection of
					antiques. No-code interface for editors to add and update
					antiques. Very much a work in progress.{' '}
				</Typography>
			</div>
		</Aux>
	);
}
