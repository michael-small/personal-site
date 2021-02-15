import React, { Component } from 'react';

export default class Education extends Component {
	render() {
		return (
			<section>
				<h2>Education 🎓</h2>
				<div id='college'>
					<b>College:</b>
					<p> University of Minnesota, Morris</p>
					<p>
						BA Computer Science & CMR (Communication, Media and
						Rhetoric)
					</p>
				</div>
				<div id='high-school'>
					<b>High School:</b>
					<p>Wadena Deer Creek, Wadena MN</p>
					<p>
						Favorite activities: Fall Play, One Act Play (performed
						at State conference twice), Film Studies
					</p>
				</div>
			</section>
		);
	}
}
