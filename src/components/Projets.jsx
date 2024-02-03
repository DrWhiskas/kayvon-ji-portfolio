import React, { forwardRef } from "react";
import ProjectsForm from "./ProjectsForm";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/projects.css'


const Projects = forwardRef((props, ref) =>{
	const [nRef, inView] = useInView({
		triggerOnce: false
	})

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
							emoji="💲"
							title="Argent Bank"
							description="Use an API for a bank user account with React"
							skills={['React', 'Redux']}
							linkGit="https://github.com/DrWhiskas/Argent-Bank-.git"
						/>
						<ProjectsForm
							emoji="🏃"
							title="SportSee"
							description="Create a dashboard with data from an API."
							skills={['React', 'Redux']}
							linkGit="https://github.com/DrWhiskas/Sportsee.git"
						/>
						<ProjectsForm
							emoji="🎫"
							title="Billed"
							description="Debug and unit tests of a ticket management application"
							skills={['JavaScript', 'Unit Testing']}
							linkGit="https://github.com/DrWhiskas/Billed-app-FR-Front.git"
						/>
					</div>
				</section>
			</motion.section>
		);
})
export default Projects;