import React, { forwardRef, useState } from 'react';
import ProjectsForm from './ProjectsForm';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Mashinneun from '../assets/projet__mashinneun.png';
import Sportsee from '../assets/project__sportsee.png';
import Kasa from '../assets/project__kasa.png';
import ArgentBank from '../assets/project__argent-bank.png';
import Cristaline from '../assets/project__cristaline.png';
import Lol from '../assets/project__lol.png';
import VB from '../assets/projet__viralBurger.png'
import LateMeteo from '../assets/late_meteo.png';
import Kji from '../assets/kji.JPG'
import '../styles/projects.css';

const Projects = forwardRef((props, ref) => {
	const [nRef, inView] = useInView({
		triggerOnce: false,
	});

	const [showMoreProject, setShowMoreProject] = useState(false);

	function handleShowMoreProjects() {
		setShowMoreProject(!showMoreProject);
	}
	return (
		<motion.section
			ref={nRef}
			initial={{ opacity: 0 }}
			animate={{ opacity: inView ? 1 : 0 }}
			transition={{ duration: 0.6 }}
			className="projets"
		>
			<section className="projets" ref={ref}>
				<h1 className="projects__title title">Projects</h1>
				<div className="projects__container">
					<ProjectsForm
						image={Kji}
						description="under construction"
						linkPag="https://drwhiskas.github.io/kji-components/"
					/>
					<ProjectsForm
						image={LateMeteo}
						description="Weather application"
						linkPage="https://drwhiskas.github.io/late-meteo/"
					/>
					<ProjectsForm
						image={Sportsee}
						title="SportSee"
						description="Dashboard with data from an API."
						linkGit="https://github.com/DrWhiskas/Sportsee.git"
					/>
					<div
						className={showMoreProject ? 'projects__more' : 'hidden-project'}
					>
						<ProjectsForm
							image={Mashinneun}
							title="Mashinneun"
							description="Freelance - Website for a restaurant with a shop"
							linkGit="https://github.com/DrWhiskas/mashinneun"
							linkPage="https://drwhiskas.github.io/mashinneun/"
						/>
						<ProjectsForm
							image={Kasa}
							title="Kasa"
							description="Private apartment rental"
							linkGit="https://github.com/DrWhiskas/P11-Developpez-une-application-Web-avec-React-et-React-Router.git"
						/>
						<ProjectsForm
							image={Cristaline}
							title="Cristaline"
							description="Freelance - Revised version of the Cristaline site (I absolutely love this water)"
							linkGit="https://github.com/DrWhiskas/moneaucristaline.git"
						/>
						<ProjectsForm
							image={ArgentBank}
							title="Argent Bank"
							description="Bank account management application"
							linkGit="https://github.com/DrWhiskas/Billed-app-FR-Front.git"
						/>
						<ProjectsForm
							image={Lol}
							title="Login Page"
							description="Freelance - League of legends Login page"
							linkGit="https://github.com/DrWhiskas/leagueoflegends.git"
							linkPage="https://drwhiskas.github.io/leagueoflegends/"
						/>
						<ProjectsForm
							image={VB}
							description="Freelance : En cours..."
							linkGit="https://github.com/DrWhiskas/viral-burger"
							linkPage="https://drwhiskas.github.io/viral-burger/"
						/>
					</div>
				</div>
				<button
					className={
						showMoreProject ? 'hero__links__link btn-project' : 'hidden-project'
					}
					onClick={handleShowMoreProjects}
				>
					Show less
				</button>
				<button
					className={
						showMoreProject ? 'hidden-project' : 'hero__links__link btn-project'
					}
					onClick={handleShowMoreProjects}
				>
					Show more ...
				</button>
			</section>
		</motion.section>
	);
});
export default Projects;
