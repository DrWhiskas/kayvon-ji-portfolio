import React, { useState } from 'react';
import Logo from '../assets/pp.png';
import '../styles/header.css';
export default function Header() {
	const [showLinks, setShowLinks] = useState(false);

	function handleShowLinks() {
		setShowLinks(!showLinks);
	}

	return (
		<header className={showLinks ? 'header show-header' : 'header'}>
			<h1 className="header__logo">KJI </h1>
			<ul className="header__links">
				<li className="header__links__link">Skills</li>
				<li className="header__links__link">Projects</li>
				<li className="header__links__link">Contact</li>
			</ul>
			<button className="header__burger" onClick={handleShowLinks}>
				<span className="burger-bar"></span>
			</button>
		</header>
	);
}
