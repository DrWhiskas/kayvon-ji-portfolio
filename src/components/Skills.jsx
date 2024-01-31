import React from 'react';
import "../styles/skills.css"
export default function Skills() {

	function SkillsItem(skill){
		return <li className="skills__list-container__list__item">{skill.text}</li>;
	}

	return (
		<section className="skills">
			<h1 className="skills__title">Skills</h1>
			<div className="skills__list-container">
				<ul className="skills__list-container__list">
					<h2 className="skills__list-container__list__title">Design</h2>
					<SkillsItem text="Figma" />
					<SkillsItem text="AdobeXD" />
				</ul>
				<ul className="skills__list-container__list">
					<h2 className="skills__list-container__list__title">Frontend</h2>
					<SkillsItem text="React" />
					<SkillsItem text="Redux" />
					<SkillsItem text="Javascript" />
					<SkillsItem text="CSS3" />
				</ul>
				<ul className="skills__list-container__list">
					<h2 className="skills__list-container__list__title">Other</h2>
					<SkillsItem text="Git / Github" />
					<SkillsItem text="Agile" />
				</ul>
			</div>
		</section>
	);
}
