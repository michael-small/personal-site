import React from 'react';
import './Projects.scss';

import Project from './Projects/Project';
import { gql, useQuery } from '@apollo/client';
import { Typography } from '@material-ui/core';

const GET_PROJECTS = gql`
	query GET_PROJECTS {
		projects {
			id
		}
	}
`;

export default function Projects() {
	const { loading, error, data } = useQuery(GET_PROJECTS);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<div id='project-body'>
			<section>
				<Typography variant='h1'>Projects</Typography>
				{data.projects.map((project, index) => (
					<Project projectId={project.id} key={index} />
				))}
			</section>
			<section>
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
					<li>XKCD Finder</li>
					<li>Factory Worker Scheduling and Line Status Service</li>
				</ul>
			</section>
		</div>
	);
}
