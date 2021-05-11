import React from 'react';
import CopyToClipB from '../UI/CopyToClipB/CopyToClipB';
import { gql, useQuery } from '@apollo/client';
import SkillsFilter from '../CV/SkillsFilter/SkillsFilter';

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

	const skillCategories = [
		{ categoryId: 'Language', readAs: 'Languages' },
		{ categoryId: 'Framework', readAs: 'Frameworks' },
		{ categoryId: 'Database', readAs: 'Databases' },
		{ categoryId: 'Concepts', readAs: 'Concepts' },
		{ categoryId: 'ExposedTo', readAs: 'Exposed To' },
	];

	return (
		<div>
			<h1>Component Workshop</h1>
			{skillCategories.map((category, index) => (
				<SkillsFilter
					skills={data.skills}
					typeId={category.categoryId}
					typeReadAs={category.readAs}
				/>
			))}
		</div>
	);
}
