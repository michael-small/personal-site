import React from 'react';
import Aux from '../../hocs/Aux';

export default function TitledImage(props) {
	return (
		<Aux>
			<h3 className='center'>{props.titleH3}</h3>
			<img
				src={props.imgURL}
				alt={props.alt}
				className='center-img cms-view'
			/>
		</Aux>
	);
}
