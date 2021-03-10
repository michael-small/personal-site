import React from 'react';

// <----- Misc functionality ----->
import PropTypes from 'prop-types';

// <----- MUI ----->
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import GitHubIcon from '@material-ui/icons/GitHub';

// <----- Styling ----->
import './CodeDialog.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function SimpleDialog(props) {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	return (
		<Dialog
			onClose={handleClose}
			aria-labelledby='simple-dialog-title'
			open={open}
		>
			<h1>{props.codeTitle}</h1>
			<DialogTitle id='simple-dialog-title'>
				<div>
					<i>
						{props.fileName}{' '}
						{/* TODO: Likely want to replace this `a` with `Link` from `react-router-dom` */}
						<a href={props.ghLink} target='_blank'>
							<GitHubIcon />
						</a>
					</i>
				</div>
			</DialogTitle>
			<SyntaxHighlighter
				// TODO: I am unsure if I want line wrapping. Unsure on both desktop and mobile. May just make dialog bigger on desktop...
				//...Or I could be fancy and have a toggle for the user.
				// wrapLongLines={true}
				lineProps={{
					style: {
						wordBreak: 'break-all',
					},
				}}
				language='jsx'
			>
				{props.multiline}
			</SyntaxHighlighter>
		</Dialog>
	);
}

SimpleDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
};

export default function CodeDialog(props) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
	};

	return (
		<div className='center'>
			<Button
				variant='outlined'
				color='primary'
				onClick={handleClickOpen}
			>
				View Code
			</Button>
			<SimpleDialog
				open={open}
				onClose={handleClose}
				codeTitle={props.codeTitle}
				fileName={props.fileName}
				ghLink={props.ghLink}
				multiline={props.multiline}
			/>
		</div>
	);
}
