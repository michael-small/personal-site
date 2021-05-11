import React from 'react';
import Button from '@material-ui/core/Button';
import { gql, useQuery } from '@apollo/client';
import Project from './Project/Project';

const GET_PROJECTS = gql`
	query GET_PROJECTS {
		projects {
			id
		}
	}
`;

export default function () {
	const { loading, error, data } = useQuery(GET_PROJECTS);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<section id='projects'>
			<h2>Projects 🚧</h2>
			<div style={{ textAlign: 'center' }}>
				<Button
					variant='contained'
					color='primary'
					size='large'
					href='/projects'
					id='showcase-link'
				>
					See More Projects
				</Button>
			</div>
			{data.projects.map((project, index) => (
				<Project projectId={project.id} key={index} />
			))}
		</section>
	);
}
