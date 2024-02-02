import React from "react";
import ProjectsForm from "./ProjectsForm";
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
		);
}