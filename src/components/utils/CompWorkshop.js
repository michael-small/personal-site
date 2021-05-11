import React from 'react';
import CopyToClipB from '../UI/CopyToClipB/CopyToClipB';
import { gql, useQuery } from '@apollo/client';

const GET_SKILLS = gql`
	query GET_SKILLS {
		skills {
			skill
			type
		}
	}
`;

export default function CompWorkshop() {
	const { loading, error, data } = useQuery(GET_SKILLS);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<div>
			<h1>Component Workshop</h1>
			<div>
				{data.skills.map((skill, index) => (
					<CopyToClipB text={skill.skill} key={index} />
				))}
			</div>
		</div>
	);
}
