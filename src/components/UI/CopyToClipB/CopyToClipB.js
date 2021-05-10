import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Snackbar from '@material-ui/core/Snackbar';

export default function CopyToClipB(props) {
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
		<div>
			<h1>Copy to clipboard</h1>

			<CopyToClipboard
				text={clipboardText}
				onCopy={() => setCopied(true)}
			>
				<Button variant='outlined' onClick={handleClick}>
					{clipboardText} <FileCopyIcon />
				</Button>
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
