import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CopyToClipB() {
	const [clipboardText, setClipboardText] = useState('');
	const [copied, setCopied] = useState(false);

	return (
		<div>
			<h1>Copy to clipboard</h1>

			<input
				value={clipboardText}
				onChange={(event) => setClipboardText(event.target.value)}
			/>

			<CopyToClipboard
				text={clipboardText}
				onCopy={() => setCopied(true)}
			>
				<button>Copy to clipboard with span </button>
			</CopyToClipboard>
			<span>{clipboardText} </span>
			<span>{copied.toString()}</span>
		</div>
	);
}
