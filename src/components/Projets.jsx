import React from "react";
import ProjectsForm from "./ProjectsForm";
import ArgentBank from '../assets/ArgentBank.JPG';
import '../styles/projects.css'
export default function Projects(){
    return (
			<section className="projets">
				<h1 className="projects__title title">Projects</h1>
				<div className="projects__container">
					<ProjectsForm
						emoji="💲"
						title="Argent Bank"
						description="Use an API for a bank user account with React"
						skills={['React', 'Redux']}
						linkGit="https://github.com/DrWhiskas/Argent-Bank-.git"
					/>
				</div>
			</section>
		);
}