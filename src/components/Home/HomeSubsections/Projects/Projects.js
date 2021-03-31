import React from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import './Projects.scss';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

export default function () {
	const classes = useStyles();

	return (
		<section id='projects'>
			<h2>Projects 🚧</h2>
			<div id='eds-garage-sale'>
				<Typography variant='h5' gutterBottom>
					🏠 Ed's Garage Sale 🛍️
				</Typography>
				<div className={classes.root}>
					<Button
						variant='contained'
						color='primary'
						size='small'
						href='https://eds-garage-sale.herokuapp.com/'
						target='_blank'
					>
						<pre>Live Site </pre> <WebIcon />
					</Button>
					<Button
						variant='contained'
						color='primary'
						size='small'
						href='https://github.com/michael-small/Eds-Garage-Sale'
						target='_blank'
					>
						<pre>Code </pre> <GitHubIcon />
					</Button>
				</div>
				<p>
					For the rapid pricing and selling of a large collection of
					antiques. No-code interface for editors to add and update
					antiques. Very much a work in progress.{' '}
				</p>
			</div>
			<div id='eds-garage-sale'>
				<Typography variant='h5' gutterBottom>
					🧺 Garlicky Bohemian Farm 🚜
				</Typography>
				<div className={classes.root}>
					<Button
						variant='contained'
						color='primary'
						size='small'
						href='https://garlickybohemianfarm.com/en'
						target='_blank'
					>
						<pre>Live Site </pre> <WebIcon />
					</Button>
				</div>
				<p>
					A blog and produce showcase for the Garlicky Bohemian Farm,
					a hobby farm that produces thousands of garlic bulbs per
					season.
				</p>
			</div>
		</section>
	);
}
