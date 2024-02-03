import React, { useState } from 'react';
import '../styles/header.css';

export default function Header({ skillsRef, projectsRef, contactRef }) {
	const [showLinks, setShowLinks] = useState(false);
	
	function handleShowLinks() {
		setShowLinks(!showLinks);
	}

	function handleSkillsClick() {
		skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
	}

	function handleProjectsClick() {
		projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
	}

	function handleContactClick() {
		contactRef.current?.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<header className={showLinks ? 'header show-header' : 'header'}>
			<h1 className="header__logo">KJI </h1>
			<ul className="header__links">
				<li className="header__links__link" onClick={handleSkillsClick}>
					Skills
				</li>
				<li className="header__links__link" onClick={handleProjectsClick}>
					Projects
				</li>
				<li className="header__links__link" onClick={handleContactClick}>
					Contact
				</li>
			</ul>
			<button className="header__burger" onClick={handleShowLinks}>
				<span className="burger-bar"></span>
			</button>
		</header>
	);
}
