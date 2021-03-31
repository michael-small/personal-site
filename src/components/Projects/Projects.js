import React from 'react';
import theme from '../UI/_theme.scss';
import Aux from '../hocs/Aux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

import { makeStyles } from '@material-ui/core/styles';
import './Projects.scss';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

export default function Projects() {
	const classes = useStyles();
	return (
		<div id='project-body'>
			<Typography variant='h1' className={theme.center}>
				Projects
			</Typography>
			{/* TODO: Import from home/projects */}
			<div className='project'>
				<div id='witty'>
					<Typography variant='h3' gutterBottom>
						🧺 Garlicky Bohemian Farm 🚜
					</Typography>
					<Typography variant='body1'>
						A blog and produce showcase for the Garlicky Bohemian
						Farm, a hobby farm that produces thousands of garlic
						bulbs per season.
					</Typography>
					<div className={classes.root}>
						<Button
							variant='contained'
							color='primary'
							size='small'
							href='https://garlickybohemianfarm.com/en'
							target='_blank'
						>
							<pre>LiveSite </pre> <WebIcon />
						</Button>
					</div>
				</div>
			</div>
			<div className='project'>
				<div id='eds-garage-sale'>
					<Typography variant='h3' gutterBottom>
						🏠 Ed's Garage Sale 🛍️
					</Typography>
					<Typography variant='body1'>
						For the rapid pricing and selling of a large collection
						of antiques. No-code interface for editors to add and
						update antiques.
						<br />
						Beta version helped make a few hundred dollars last year
						during garage sale season.
						<br />
						Will be used more this year, and will eventually support
						customers viewing and buying items. Very much a work in
						progress.
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
				</div>
				<div>
					<Typography variant='h2'>Coming Soon</Typography>
					<Typography variant='body1'>
						I have various projects that I need to host. Internship
						projects, personal projects, and more.
					</Typography>
					<ul>
						<li>Augmented Reality Learning Game Internship</li>
						<li>Undergraduate Research Symposium Internship</li>
						<li>Witty: Video Learning Platform</li>
						<li>
							Strength-Star: Demo for friend's strength training
							webapp
						</li>
						<li>CSCi 3601: Software Design</li>
						<li>XKCD Finder</li>
						<li>
							Factory Worker Scheduling and Line Status Service
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
