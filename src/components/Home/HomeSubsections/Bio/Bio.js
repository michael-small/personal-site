import React, { Component } from 'react';
import GH_Logo from '../../../../images/GitHub-Mark-64px.png';
import Avatar from '@material-ui/core/Avatar';
import Headshot from '../../../../images/headshot.jpg';
import Button from '@material-ui/core/Button';
import './Bio.scss';

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

				<Avatar alt='Michael Small' src={Headshot} id='avatar' />
				<h3>
					Check out a demo of some of my work, with information
					tailored to recruiters and developers.
				</h3>
				<Button
					variant='outlined'
					color='primary'
					size='large'
					href='/showcase'
					id='showcase-link'
				>
					SHOWCASE
				</Button>
			</section>
		);
	}
}
