import React, { Component } from 'react';

export default class Projects extends Component {
	render() {
		return (
			<section>
				<h2>Projects 🚧</h2>
				<div id='omg-str'>
					<b>🏋️ Omega Strength 💪</b>
					<p>
						Friend's strength training web app. Ported from Angular
						2+ to React.{' '}
						<a
							href='https://github.com/michael-small/strength-star'
							target='_blank'
							rel='noreferrer'
						>
							Created sandbox
						</a>{' '}
						for testing ideas/stack, waiting for friend to create
						official repo.
					</p>
				</div>
				<div id='witty'>
					<b>🤔 Witty 😁</b>
					<p>
						A React{' '}
						<a
							href='https://github.com/michael-small/Witty'
							target='_blank'
							rel='noreferrer'
						>
							web app
						</a>{' '}
						dedicated to promoting online learning via video and
						reading lessons.
					</p>
				</div>
			</section>
		);
	}
}
