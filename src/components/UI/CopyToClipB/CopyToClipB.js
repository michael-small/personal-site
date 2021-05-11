import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	element: {
		marginBottom: '4px',
	},
});

export default function CopyToClipB(props) {
	const classes = useStyles();

	const [clipboardText, setClipboardText] = useState(props.text);
	const [copied, setCopied] = useState(false);

	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<div className={classes.element}>
			<CopyToClipboard
				text={clipboardText}
				onCopy={() => setCopied(true)}
			>
				<span>
					<Button variant='outlined' onClick={handleClick}>
						{clipboardText} <FileCopyIcon />
					</Button>
				</span>
			</CopyToClipboard>
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				open={open}
				autoHideDuration={2000}
				onClose={handleClose}
				message={`COPIED: ${clipboardText}`}
			/>
		</div>
	);
}
