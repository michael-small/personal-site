import React from 'react';
import CopyToClipB from '../CopyToClipB/CopyToClipB';
import { gql, useQuery } from '@apollo/client';
import SkillsFilter from '../../CV/SkillsFilter/SkillsFilter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	WorkshopDesc: {
		textAlign: 'center',
	},
});

const GET_SKILLS = gql`
	query GET_SKILLS {
		skills {
			skill
			type
		}
	}
`;

export default function CompWorkshop() {
	const classes = useStyles();

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
			<h3 className={classes.WorkshopDesc}>
				Where upcoming website features are demo'd. Features on this
				page can be and probably are buggy.
			</h3>
			{/* {skillCategories.map((category, index) => (
				<SkillsFilter
					skills={data.skills}
					typeId={category.categoryId}
					typeReadAs={category.readAs}
					key={index}
				/>
			))} */}
		</div>
	);
}
