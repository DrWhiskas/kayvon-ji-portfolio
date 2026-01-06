import React from "react";
import '../styles/experienceCard.css'

export default function ExperienceCard({ position, company, time, work, description, stack }) {

    return (
			<article className="experience-card">
				<h3 className="experience-card__position">{position}</h3>
				<div className="experience-card__separator">
					<h4 className="experience-card__company">{company}</h4>
					<span className="experience-card__time">{time}</span>
				</div>

				<ul className="experience-card__description">
					{work.map((work, index) => (
						<li key={index} className="experience-card__work">
							{work}
						</li>
					))}
				</ul>
				<div className="experience-card__stack">
					{stack.map((tech, index) => (
						<span key={index} className="experience-card__stack-item">
							{tech}
						</span>
					))}
				</div>
			</article>
		);

}