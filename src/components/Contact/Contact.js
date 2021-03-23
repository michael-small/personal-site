import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import '../UI/_theme.scss';

export default function Contact(props) {
	return (
		<div>
			<h1>Contact Information</h1>
			<section>
				<h3 className='centered-text'>
					LinkedIn <LinkedInIcon />
				</h3>
			</section>
			<section>
				<h3 className='centered-text'>
					GitHub <GitHubIcon />
				</h3>
			</section>
			<section>
				<h3 className='centered-text'>
					Email <EmailIcon />
				</h3>
			</section>
		</div>
	);
}
