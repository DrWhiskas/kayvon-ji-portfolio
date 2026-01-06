import React, { useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projets';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import '../styles/home.css';

export default function Home() {
	const skillsRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);
	const experienceRef = useRef(null);
	return (
		<section className="home">
			<Header
				skillsRef={skillsRef}
				experienceRef={experienceRef}
				projectsRef={projectsRef}
				contactRef={contactRef}
			/>
			<Hero />
			<Skills ref={skillsRef} />
			<Experience ref={experienceRef} />
			<Projects ref={projectsRef} />
			<Contact ref={contactRef} />
			<Footer />
		</section>
	);
}
