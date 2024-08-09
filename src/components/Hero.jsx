import React from 'react';
import Logo from '../assets/pp.png';
import '../styles/hero.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function Hero() {
	const [ref, inView] = useInView({
		triggerOnce: false, // Désactivez-le si vous voulez que l'animation se répète chaque fois que l'élément devient visible
	});
	//const isVisible = true;

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0 }}
			animate={{ opacity: inView ? 1 : 0 }}
			transition={{ duration: 0.6 }}
			className="hero"
		>
			<section className="hero">
				<div className="hero__container">
					<div className="hero__container__header">
						<p className="hero__container__header__sub"> Hi ! I'm</p>
						<span className="hero__container__header__name">Kayvon Ji</span>
					</div>
					<div className="hero__container__main">
						<span className="hero__container__main__work">
							Full-Stack Developer.
						</span>
						I am passionate about creating full stack solutions that are both
						user-friendly on the front end and robust and scalable on the back
						end.
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
						<button
							className="hero__links__link"
							onClick={() => window.open('mailto:jikayvon@gmail.com')}
						>
							<FaEnvelope className="icon" />
							jikayvon@gmail.com
						</button>
						<button
							className="hero__links__link"
							onClick={() => window.open('https://discord.com/channels/@me')}
						>
							<FaDiscord className="icon" />
							kayv__
						</button>
					</div>
				</div>
				<img src={Logo} alt="logo" className="hero__logo" />
			</section>
		</motion.section>
	);
}

