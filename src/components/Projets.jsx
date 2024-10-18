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
import LateConverter from '../assets/lateConverter.png'
import djkotic from '../assets/djkotic.png'
import manage from '../assets/manage-landing-page.png'
import ratingModal from '../assets/RatingModal.png'
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
						image={ratingModal}
						title="Rating Modal"
						description=" interactive rating modal developed using React.js and TypeScript"
						linkPage="https://drwhiskas.github.io/rating-modal/"
						linkGit="https://github.com/DrWhiskas/rating-modal/tree/main"
					/>

					<ProjectsForm
						image={manage}
						title="Manage"
						description="Website that brings together a variety of music genres and artists. under construction"
						linkPage="https://drwhiskas.github.io/manage-landing-page/"
						linkGit="https://github.com/DrWhiskas/manage-landing-page/tree/main"
					/>

					<ProjectsForm
						image={LateMeteo}
						title="Late Meteo"
						description="Weather application"
						linkPage="https://drwhiskas.github.io/late-meteo/"
					/>

					<div
						className={showMoreProject ? 'projects__more' : 'hidden-project'}
					>
						<ProjectsForm
							image={djkotic}
							title="BeatBrowser"
							description="Website that brings together a variety of music genres and artists. under construction"
							linkPage="https://drwhiskas.github.io/beatbrowser/"
						/>

						<ProjectsForm
							image={Kji}
							title="Kji-components"
							description="Testing reusable components"
							linkPage="https://drwhiskas.github.io/kji-components/"
						/>
						<ProjectsForm
							image={Sportsee}
							title="SportSee"
							description="Dashboard with data from an API."
							linkPage="https://drwhiskas.github.io/Sportsee/"
							linkGit="https://github.com/DrWhiskas/Sportsee.git"
						/>
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
