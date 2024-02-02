import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projets';
import ModalForm from '../components/modalForm';
import '../styles/home.css';

export default function Home() {
	return (
		<section className="home">
			<Header />
			<Hero />
			<Skills />
			<Projects />
		</section>
	);
}
