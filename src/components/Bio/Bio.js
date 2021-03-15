import React, { Component } from 'react';
import GH_Logo from '../../images/GitHub-Mark-64px.png';
import Avatar from '@material-ui/core/Avatar';
import Headshot from '../../images/headshot.jpg';
import { Link } from 'react-router-dom';

export default class Bio extends Component {
	render() {
		return (
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
					and/or projects.{' '}
					<p>
						{' '}
						<Link to='/showcase'>
							Check out a demo of some of my work, with
							information tailored to recruiters and developers.
						</Link>
					</p>
				</p>
			</section>
		);
	}
}
