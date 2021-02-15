import React, { Component } from 'react';
import './Home.css';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';
import GH_Logo from '../../images/GitHub-Mark-64px.png';
import Avatar from '@material-ui/core/Avatar';
import Headshot from '../../images/headshot.jpg';
import Divider from '@material-ui/core/Divider';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	handleClick = () => {
		this.setState({ open: true });
		console.log(this.state.open);
	};

	handleClose = (event) => {
		this.setState({ open: false });
		console.log(this.state.open);
	};

	render() {
		return (
			<Box>
				<section id='bio'>
					<h1>
						Michael{' '}
						<a
							href='https://github.com/michael-small'
							target='_blank'
							rel='noreferrer'
						>
							<img src={GH_Logo} alt='Github Profile' />
						</a>
						Small
					</h1>

					<Avatar
						alt='Michael Small'
						src={Headshot}
						style={{
							height: '200px',
							width: '200px',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					/>
					<p>
						I like making things. Looking for a full-time position
						and/or projects.
					</p>
				</section>
				<Divider />
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
							Favorite activities: Fall Play, One Act Play
							(performed at State conference twice), Film Studies
						</p>
					</div>
				</section>
				<Divider />
				<section>
					<h2>Projects 🚧</h2>
					<div id='omg-str'>
						<b>🏋️ Omega Strength 💪</b>
						<p>
							Friend's strength training web app. Ported from
							Angular 2+ to React.{' '}
							<a
								href='https://github.com/michael-small/strength-star'
								target='_blank'
								rel='noreferrer'
							>
								Created sandbox
							</a>{' '}
							for testing ideas/stack, waiting for friend to
							create official repo.
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
				<Divider />
				<section>
					<h2>Open for hire 💼</h2>
					<p>
						I would love to work in a town on par with or smaller
						than Fargo/Moorhead or St.Cloud/Duluth. However, I am
						open to the Twin Cities and remote work. Perhaps out of
						state if offer is great.
					</p>
					<p>Willing to relocate.</p>
				</section>
				<Divider />
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
				<Divider />
				<section id='reviews'>
					<h2>Reviews ⭐⭐⭐⭐⭐</h2>
					<div style={{ marginBottom: '0.8rem' }}>
						<i>"The markdown god!"</i>{' '}
						<span>- Utkarsh and Nate, CSci friends</span>
					</div>
					<div>
						<i>"Sweet boy"</i>{' '}
						<span>
							- My mom, who I have made{' '}
							<a
								href='https://garlickybohemianfarm.com/en'
								target='_blank'
								rel='noreferrer'
							>
								a site for
							</a>{' '}
							and who supported me through college
						</span>
					</div>
				</section>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					autoHideDuration={6000}
					onClose={this.handleClose}
					message="Useless FAB and Snackbar: I'm so cool"
					open={this.state.open}
					style={{ maxWidth: '70%' }}
				></Snackbar>
				<Fab
					color='primary'
					aria-label='add'
					id='fab'
					onClick={this.handleClick}
				>
					<AddIcon />
				</Fab>
			</Box>
		);
	}
}
