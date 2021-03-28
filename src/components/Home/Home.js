import React, { Component } from 'react';
import './Home.scss';

//MUI components
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

// Project's page components
import Bio from './HomeSubsections/Bio/Bio';
import Education from './HomeSubsections/Education/Education';
import Projects from './HomeSubsections/Projects/Projects';
import HireMe from './HomeSubsections/HireMe/HireMe';
import Languages from './HomeSubsections/Languages/Languages';
import Reviews from './HomeSubsections/Reviews/Reviews';
import SnackbarFab from '../UI/SnackbarFab/SnackbarFab';
import Contact from '../Contact/Contact';

export default class Home extends Component {
	render() {
		return (
			<Box>
				<Bio />

				<Contact />

				<Divider />

				<Education />

				<Divider />

				<Projects />

				<Divider />

				<HireMe />

				<Divider />

				<Languages />

				<Divider />

				<Reviews />

				<SnackbarFab />
			</Box>
		);
	}
}
