import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class SnackbarFab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	handleClick = () => {
		this.setState({ open: true });
	};

	handleClose = (event) => {
		this.setState({ open: false });
	};
	render() {
		return (
			<span>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					autoHideDuration={6000}
					onClose={this.handleClose}
					message="Useless FAB and Snackbar: I'm so cool"
					open={this.state.open}
					style={{ maxWidth: '70%' }}
				></Snackbar>
				<Fab
					color='primary'
					aria-label='add'
					id='fab'
					onClick={this.handleClick}
				>
					<AddIcon />
				</Fab>
			</span>
		);
	}
}
