import React from "react";
import { FaGithub, FaDesktop } from 'react-icons/fa';
import '../styles/projectsForm.css'

export default function ProjectsForm({ emoji,image, title, description, skills, linkGit, linkPage}){
	/*


<div className="projects-form__emoji">{emoji}</div>
				<h2 className="projects-form__title">{title}</h2>
				<div className="projects-form__skills">
					{skills.map((skill, index) => (
						<span key={index} className="projects-form__skills__item">
							{skill}
						</span>
					))}
				</div>
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



	*/

	return (
		<article className="projects-form">
			<img
				className="projects-form__image"
				src={image}
				alt={title + ' image'}
			/>
			<div className="projects-form__container">
				<h1 className="projects-form__container__title">{title}</h1>
				<p className="projects-form__container__description">{description}</p>
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
			</div>
		</article>
	);
}