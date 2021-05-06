import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';

// Todo: Move to different component space so it can be wrapped properly
function CopyableItem() {
	return <p>Hello</p>;
}

export default function CopyToClipB(props) {
	const [clipboardText, setClipboardText] = useState('');
	const [copied, setCopied] = useState(false);

	return (
		<div>
			<h1>Copy to clipboard</h1>

			{/* <TextField
				variant='filled'
				id='copy-to-clipboard'
				label='Copy to clipboard'
				value={clipboardText}
				onChange={(event) => setClipboardText(event.target.value)}
			/> */}

			<CopyToClipboard
				text={clipboardText}
				onCopy={() => setCopied(true)}
			>
				<Button
					variant='outlined'
					// onClick={setClipboardText(props.children)}
				>
					<CopyableItem /> <FileCopyIcon />
				</Button>
			</CopyToClipboard>
			<p>Copied text: {clipboardText} </p>
			<p>Copied: {copied.toString()}</p>
		</div>
	);
}
