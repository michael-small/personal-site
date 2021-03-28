import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Obfuscate from 'react-obfuscate';
import '../UI/_theme.scss';
import './Contact.scss';

export default function Contact(props) {
	return (
		<section id='contact-body'>
			<h2>Contact Information</h2>
			<section className='centered-text'>
				<h3>
					LinkedIn <LinkedInIcon />
				</h3>
				<a
					href='https://www.linkedin.com/in/michael-small-4ab0b315b/'
					target='_blank'
					rel='noreferrer'
				>
					linkedin.com/michael-small-dev
				</a>
			</section>
			<section className='centered-text'>
				<h3>
					GitHub <GitHubIcon />
				</h3>
				<a
					href='https://github.com/michael-small'
					target='_blank'
					rel='noreferrer'
				>
					github.com/michael-small
				</a>
			</section>
			<section className='centered-text'>
				<h3>
					Email <EmailIcon />
				</h3>
				<Obfuscate email='small203@morris.umn.edu' />
			</section>
		</section>
	);
}
