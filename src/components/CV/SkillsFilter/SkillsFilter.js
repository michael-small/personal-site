import React from 'react';
import CopyToClipB from '../../UI/CopyToClipB/CopyToClipB';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	SkillType: {
		padding: '4px',
	},
	Body: {
		marginLeft: 'auto',
		marginRight: 'auto',
		display: 'block',
		width: '50%',
	},
});

export default function SkillsFilter(props) {
	const classes = useStyles();
	const filteredSkill = props.skills.filter((skill) =>
		skill.type.includes(props.typeId)
	);

	return (
		<div className={classes.Body}>
			<h1>{props.typeReadAs}</h1>
			<Paper className={classes.SkillType}>
				{filteredSkill.map((skill, index) => (
					<CopyToClipB key={index} text={skill.skill} />
				))}
			</Paper>
		</div>
	);
}
