import React from 'react';
import Logo from '../assets/pp.png';
import '../styles/hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
	return (
		<section className="hero">
			<div className="hero__container">
				<div className="hero__container__header">
					<p className="hero__container__header__sub"> Hi ! I'm</p>
					<span className="hero__container__header__name">Kayvon Ji</span>
				</div>
				<div className="hero__container__main">
					<span className="hero__container__main__work">
						Junior Front-End Developer.
					</span>
					I am passionate about creating frontend products that are both
					user-friendly and scalable.
				</div>
				<div className="hero__links">
					<button
						className="hero__links__link"
						onClick={() =>
							window.open('https://github.com/DrWhiskas?tab=repositories')
						}
					>
						<FaGithub className="icon" />
						Github
					</button>
					<button
						className="hero__links__link"
						onClick={() =>
							window.open('https://www.linkedin.com/in/kayvon-ji/')
						}
					>
						<FaLinkedin className="icon" />
						Linkedin
					</button>
					<button className="hero__links__link">
						<FaEnvelope className="icon" />
						Email
					</button>
				</div>
			</div>
			<img src={Logo} alt="logo" className="hero__logo" />
		</section>
	);
}
