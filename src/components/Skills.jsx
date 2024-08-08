import React, { forwardRef } from 'react';
import "../styles/skills.css";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Skills = forwardRef((props, ref) => {
		const [Nref, inView] = useInView({
			triggerOnce: false, // Désactivez-le si vous voulez que l'animation se répète chaque fois que l'élément devient visible
		});
	const SkillsItem = ({ icon, alt }) => {
		return <li className="skills__list-container__list__item"><img src={icon} alt={alt} /></li>;
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
						<SkillsItem
							icon="https://img.icons8.com/?size=100&id=W0YEwBDDfTeu&format=png&color=000000"
							alt="Figma"
						/>
						<SkillsItem icon="https://img.icons8.com/?size=100&id=4VVL78edhbW9&format=png&color=000000" />
					</ul>
					<ul className="skills__list-container__list">
						<h2 className="skills__list-container__list__title">Frontend</h2>
						<SkillsItem icon="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" />
						<SkillsItem icon="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" />
						<SkillsItem icon="https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000" />
						<SkillsItem icon="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" />
						<SkillsItem icon="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" />
					</ul>
					<ul className="skills__list-container__list">
						<h2 className="skills__list-container__list__title">Backend</h2>
						<SkillsItem icon="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" />
						<SkillsItem icon="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" />
						<SkillsItem icon="https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000" />
					</ul>
					<ul className="skills__list-container__list">
						<h2 className="skills__list-container__list__title">Other</h2>
						<SkillsItem icon="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" />
						<SkillsItem icon="https://img.icons8.com/?size=100&id=106562&format=png&color=000000" />
						<SkillsItem icon="https://img.icons8.com/?size=100&id=bYQfsX9fzsEI&format=png&color=000000" />
					</ul>
				</div>
			</section>
		</motion.section>
	);
});

export default Skills;