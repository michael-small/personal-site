import React, { Component } from 'react';

export default class Reviews extends Component {
	render() {
		return (
			<section id='reviews'>
				<h2>Reviews ⭐⭐⭐⭐⭐</h2>
				<div>
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
		);
	}
}
