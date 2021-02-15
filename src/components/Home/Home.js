import React, { Component } from 'react';
import './Home.css';
import Box from '@material-ui/core/Box';

import Divider from '@material-ui/core/Divider';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import HireMe from '../HireMe/HireMe';
import Languages from '../Languages/Languages';
import Reviews from '../Reviews/Reviews';
import SnackbarFab from '../SnackbarFab/SnackbarFab';
import Bio from '../Bio/Bio';

export default class Home extends Component {
	render() {
		return (
			<Box>
				<Bio />

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
