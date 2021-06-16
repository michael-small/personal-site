import React from 'react';

// <----- Styling ----->
import './Showcase.scss';
import '../UI/_theme.scss';
import ViewPreview from './ViewPreview/ViewPreview';

export default function Showcase() {
	return (
		<div id='showcase' className='center-block'>
			<h1>Showcase</h1>
			<h3>Developer and Friends/Family Section coming soon</h3>
			<ViewPreview
				role='Recruiter'
				description='A streamlined overview of some features I want to showcase. If you have hands-on coding experience, consider checking out the developer view.'
				codeBackgroundReq='No hands-on programming experience required.'
				link='/showcase/recruiter'
			/>
			<ViewPreview
				role='Developer'
				description='An in depth walkthrough of features and accompanying explanation of code. Recruiters with hands-on coding experience may want to check this out.'
				codeBackgroundReq='Web development. Knowledge of React is preferable.'
				link='/Showcase'
			/>
			<ViewPreview
				role='Friends and Family'
				description='The simplest overview of the demos. My grandma should be able to understand them <3'
				codeBackgroundReq='No coding background required.'
				link='/Showcase'
			/>
		</div>
	);
}
