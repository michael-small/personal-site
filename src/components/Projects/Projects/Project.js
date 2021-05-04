import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	project: {
		marginBottom: '8px',
	},
}));

const GET_PROJECT = gql`
	query GET_PROJECT($id: ID) {
		project(where: { id: $id }) {
			title
			githubUrl
			liveSiteUrl
			longDescription
		}
	}
`;

export default function Project(props) {
	const classes = useStyles();

	const { loading, error, data } = useQuery(GET_PROJECT, {
		variables: { id: props.projectId },
	});

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<div className={classes.project}>
			<Typography variant='h3' gutterBottom>
				{data.project.title}
			</Typography>
			<Typography variant='body1'>
				{data.project.longDescription}
			</Typography>
			<div className={classes.root}>
				{data.project.liveSiteUrl && (
					<Button
						variant='contained'
						color='primary'
						size='small'
						href={data.project.liveSiteUrl}
						target='_blank'
					>
						<pre>Live Site </pre> <WebIcon />
					</Button>
				)}

				{data.project.githubUrl && (
					<Button
						variant='contained'
						color='primary'
						size='small'
						href={data.project.githubUrl}
						target='_blank'
					>
						<pre>Code </pre> <GitHubIcon />
					</Button>
				)}
			</div>
		</div>
	);
}
