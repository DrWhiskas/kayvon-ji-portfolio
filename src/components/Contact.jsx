import React, { forwardRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/contact.css';

const Contact = forwardRef((props, ref) => {
	const [Nref, inView] = useInView({
		triggerOnce: false, // Désactivez-le si vous voulez que l'animation se répète chaque fois que l'élément devient visible
	});

	return (
		<motion.section
			ref={Nref}
			initial={{ opacity: 0 }}
			animate={{ opacity: inView ? 1 : 0 }}
			transition={{ duration: 0.6 }}
			className="contact"
		>
			<section className="contact" ref={ref}>
				<h1 className="contact__title title">Contact</h1>
				<p className="contact__text">
					Feel free to contact me by email or through my social networks.
				</p>
				<div className="contact__links hero__links">
					<button
						className="contact__link hero__links__link"
						onClick={() =>
							window.open('https://github.com/DrWhiskas?tab=repositories')
						}
					>
						<FaGithub className="icon" />
						Github
					</button>
					<button
						className="contact__link hero__links__link"
						onClick={() =>
							window.open('https://www.linkedin.com/in/kayvon-ji/')
						}
					>
						<FaLinkedin className="icon" />
						Linkedin
					</button>
					<button
						className="contact__link hero__links__link"
						onClick={() => window.open('mailto:jikayvon@gmail.com')}
					>
						<FaEnvelope className="icon" />
						jikayvon@gmail.com
					</button>
					<button
						className="contact__link hero__links__link"
						onClick={() => window.open('https://discord.com/channels/@me')}
					>
						<FaDiscord className="icon" />
						kayv__
					</button>
				</div>
			</section>
		</motion.section>
	);
});
export default Contact;
