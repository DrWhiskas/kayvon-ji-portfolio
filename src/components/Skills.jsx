import React, { forwardRef } from 'react';
import "../styles/skills.css";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Skills = forwardRef((props, ref) => {
		const [Nref, inView] = useInView({
			triggerOnce: false, // Désactivez-le si vous voulez que l'animation se répète chaque fois que l'élément devient visible
		});
	const SkillsItem = ({ text }) => {
		return <li className="skills__list-container__list__item">{text}</li>;
	};

	return (
		<motion.section
			ref={Nref}
			initial={{ opacity: 0 }}
			animate={{ opacity: inView ? 1 : 0 }}
			transition={{ duration: 0.6 }}
			className="skills"
		>
			<section className="skills" ref={ref}>
				<h1 className="skills__title title">Skills</h1>
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
		</motion.section>
	);
});

export default Skills;