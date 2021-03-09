import React from 'react';

// <----- Misc functionality ----->
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

// <----- MUI ----->
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

// <----- Styling ----->
import './CodeDialog.css';

function SimpleDialog(props) {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const sanitizer = DOMPurify.sanitize;

	return (
		<Dialog
			onClose={handleClose}
			aria-labelledby='simple-dialog-title'
			open={open}
		>
			<h1>{props.codeTitle}</h1>
			<DialogTitle id='simple-dialog-title'>
				<div>
					<a href={props.ghLink}>{props.fileName}</a>
				</div>
			</DialogTitle>
			<span
				dangerouslySetInnerHTML={{
					__html: sanitizer(props.codeRichText.html),
				}}
			></span>
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
				codeRichText={props.codeRichText}
			/>
		</div>
	);
}
