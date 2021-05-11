import React from 'react';
import CopyToClipB from '../../UI/CopyToClipB/CopyToClipB';

export default function SkillsFilter(props) {
	const filteredSkill = props.skills.filter((skill) =>
		skill.type.includes(props.typeId)
	);

	return (
		<div>
			<h1>{props.typeReadAs}</h1>
			{filteredSkill.map((skill, index) => (
				<CopyToClipB key={index} text={skill.skill} />
			))}
		</div>
	);
}
