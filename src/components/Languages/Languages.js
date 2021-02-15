import React, { Component } from 'react';

export default class Languages extends Component {
	render() {
		return (
			<section>
				<h2>Languages/Concepts 👨‍💻</h2>
				<b>Frontend</b>
				<ul>
					<li>JavaScript/HTML/CSS</li>
					<li>Angular 2+/React (site is written in React)</li>
					<li>Browser Dev Tools (even the cooler features)</li>
				</ul>
				<b>Backend/DBs</b>
				<ul>
					<li>Express.js for Node.js</li>
					<li>NoSQL: MongoDB</li>
					<li>SQL: MySQL w/MariaDB</li>
				</ul>
				<b>Misc</b>
				<ul>
					<li>Agile</li>
					<li>Git</li>
					<li>Deployment</li>
					<li>CMS Platforms (Grav, Gatsby w/Netlify)</li>
					<li>Visual Studio Code/IntelliJ</li>
				</ul>
			</section>
		);
	}
}
