import React from "react";
import { FaGithub, FaDesktop } from 'react-icons/fa';
import '../styles/projectsForm.css'

export default function ProjectsForm({ emoji, title, description, skills, linkGit, linkPage}){

    return (
			<article className="projects-form">
				<div className="projects-form__emoji">{emoji}</div>
				<h2 className="projects-form__title">{title}</h2>
				<u className="projects-form__skills">
					{skills.map((skill, index) => (
						<li key={index} className="projects-form__skills__item">
							{skill}
						</li>
					))}
				</u>
				<p className="projects-form__description">{description}</p>
				<div className="projects-form__links">
					{linkGit && (
						<button
							className="projects-form__button"
							onClick={() => window.open(linkGit)}
						>
							<FaGithub />
							GitHub
						</button>
					)}
					{linkPage && (
						<button
							className="projects-form__button"
							onClick={() => window.open(linkPage)}
						>
							<FaDesktop />
							Page
						</button>
					)}
				</div>
			</article>
		);

}